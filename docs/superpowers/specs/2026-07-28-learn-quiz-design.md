# Learn lesson quizzes — design

**Date:** 2026-07-28  
**Status:** Approved  
**Scope:** Optional end-of-lesson quiz UI on `/learn/*` articles, seed content for ~12 core lessons.

## Goal

After reading a meaty learn lesson, the learner can open a collapsed **Check your understanding** accordion, take a short multiple-choice quiz, see immediate feedback, get a score, and retry unlimited times. Small or reference-only pages have no quiz.

## Non-goals (v1)

- Progress persistence / accounts / leaderboards
- Server-side grading
- Free-response or multi-select questions
- Quizzes on every lesson (only when frontmatter is authored)
- Category-level or multi-lesson exams

## Data model

Optional `quiz` field on the existing `learn` content collection (frontmatter).

```yaml
quiz:
  title: "Check your understanding"  # optional
  questions:
    - prompt: "What is the primary difference between single $...$ and double $$...$$?"
      choices:
        - "Single dollar signs are for Greek letters; double for fractions."
        - "Single dollar signs denote inline math; double denote display math on a new line."
        - "Single is for the article class; double is for books."
        - "Double dollar signs are required for any formula with an exponent."
      answer: "B"                 # letter A–F matching choices[0] = A
      hint: "Think about where the formula sits on the page."
      explanation: "Inline math flows in a sentence; display math is centered on its own line."
      level: beginner             # optional: beginner | intermediate | advanced
      tags: [math, delimiters]    # optional
```

### Zod rules

- `quiz` optional.
- `questions` min length **2** to render (fewer = treat as absent).
- `choices` length 2–6.
- `answer` string matching `/^[A-F]$/i`, and index must be in range for `choices`.
- `hint`, `explanation`, `level`, `tags` optional.

### Skip rules

Do **not** author quizzes for pure reference dumps:

- `cheatsheet`
- `every-command-explained`
- `math-symbols-cheatsheet`
- `research-jargon-glossary`

Only add a quiz when the lesson teaches a testable core idea with enough substance.

## UX

### Placement

On `src/pages/learn/[...slug].astro`, after the optional “LaTeX used on this page” glossary and **before** the prev/next pager.

### Shell

- Collapsed by default (native `<details>`/`<summary>` or Radix Accordion — prefer lightweight native details for zero JS until open, or React-controlled accordion inside the island).
- Header: icon + title (default “Check your understanding”) + meta pill (“4 questions”).
- Educational card chrome: rounded surface, soft brand accent, responsive padding; dark/light via existing CSS variables (`--ol-*`, learn theme).

### Interaction flow

1. **Idle (accordion open):** short blurb + **Start quiz**.
2. **Question:** progress `n / total`, prompt, A–D (etc.) choice cards.
3. **On select:** immediate correct/incorrect styling + optional explanation; **Next** (last question → **See results**).
4. **Results:** score `correct/total` + percent + short copy; **Retry quiz** clears state and returns to Q1.
5. **Hint:** optional collapsed control under the prompt when `hint` is set.

Unlimited retries. No lockout. No persistence in v1.

### Accessibility

- Focusable choices with keyboard (arrow keys / Enter or Space).
- `aria-live` for feedback and score announcements.
- Visible focus rings; sufficient contrast on correct/incorrect states.

### Math in prompts

Prompts may include `$...$` / `\(...\)` LaTeX. Render with KaTeX on the client (already a dependency), same as tools/live previews. Choices may also contain short inline math.

## Component design

### Files

| Path | Role |
|------|------|
| `src/components/learn/quiz-types.ts` | Types + `answerLetterToIndex` / validation helpers |
| `src/components/learn/LearnQuiz.tsx` | Reusable React island |
| `src/styles/learn.css` | `.learn-quiz*` styles |
| `src/content.config.ts` | Schema |
| `src/pages/learn/[...slug].astro` | Mount when quiz present |
| `src/content/learn/<slug>.md` | Seed frontmatter |

### API

```tsx
export type QuizQuestion = {
  prompt: string;
  choices: string[];
  answer: string; // "A" | "B" | ...
  hint?: string;
  explanation?: string;
  level?: "beginner" | "intermediate" | "advanced";
  tags?: string[];
};

export type LearnQuizProps = {
  title?: string;
  questions: QuizQuestion[];
  lessonId: string;
};

export default function LearnQuiz(props: LearnQuizProps): JSX.Element;
```

Mount:

```astro
{quiz && (
  <LearnQuiz
    client:visible
    title={quiz.title}
    questions={quiz.questions}
    lessonId={article.id}
  />
)}
```

### Internal state machine

`idle → question(i) → feedback(i) → … → results → idle/question(0)` on retry.

## Seed content (first ship)

Author 4–6 MCQs each on:

1. `math-mode`
2. `first-document`
3. `document-skeleton`
4. `preamble-explained`
5. `greek-letters`
6. `fractions`
7. `sections`
8. `create-table`
9. `insert-images`
10. `add-citations`
11. `missing-dollar`
12. `commands-environments`

Question quality bar:

- Test concepts from that lesson (not trivia from elsewhere).
- One unambiguous correct letter.
- Plausible distractors (common mistakes).
- Prefer operational knowledge (“when do you use X”) over pure recall of command names when possible.

## Visual theme

Clean educational app feel (aligned with the reference quiz UI):

- Soft card surfaces, generous choice hit targets (~44px min height)
- Progress as quiet text or slim bar (`2 / 14`)
- Correct = success green tint; incorrect = muted red / strike wrong + show right
- Primary CTA pill button (Next / Retry) matching site accent blue
- Mobile: full-width stacked choices; desktop: same stack inside article measure

No heavy illustration library; use a small SVG icon (clipboard / sparkles / check) in the accordion header.

## Testing / verification

- `pnpm build` succeeds with new schema.
- Manually: open a seeded lesson → accordion closed → open → complete quiz → score → retry.
- Open a non-seeded lesson → no quiz block.
- Invalid frontmatter (answer letter out of range) fails content collection validation at build.

## Rollout

1. Schema + component + styles  
2. Wire into article template  
3. Seed 12 lessons  
4. Build + spot-check  

Later (out of scope): bulk authoring for remaining eligible lessons, localStorage “best score”, track-level quizzes.
