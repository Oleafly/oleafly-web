export type QuizLevel = "beginner" | "intermediate" | "advanced";

export type QuizQuestion = {
  prompt: string;
  choices: string[];
  /** Letter matching choices[0] = "A", choices[1] = "B", … */
  answer: string;
  hint?: string;
  explanation?: string;
  level?: QuizLevel;
  tags?: string[];
};

export type LearnQuizData = {
  title?: string;
  questions: QuizQuestion[];
};

export function answerLetterToIndex(answer: string): number {
  const letter = answer.trim().toUpperCase();
  if (!/^[A-F]$/.test(letter)) return -1;
  return letter.charCodeAt(0) - 65;
}

export function indexToAnswerLetter(index: number): string {
  return String.fromCharCode(65 + index);
}

/** Minimum questions required before a quiz section is rendered. */
export const QUIZ_MIN_QUESTIONS = 2;

/** Prepared question with shuffled choices; correctIndex is after shuffle. */
export type ShuffledQuestion = {
  prompt: string;
  choices: string[];
  correctIndex: number;
  hint?: string;
  explanation?: string;
  level?: QuizLevel;
  tags?: string[];
};

/** Fisher–Yates shuffle (mutates a copy). */
export function shuffleInPlace<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i]!;
    arr[i] = arr[j]!;
    arr[j] = tmp;
  }
  return arr;
}

/**
 * Shuffle choice order so the correct answer letter is not always B.
 * Authors often mark answer: "B"; presentation must still be unpredictable.
 */
export function shuffleQuestion(q: QuizQuestion): ShuffledQuestion {
  const correctSource = answerLetterToIndex(q.answer);
  const n = q.choices.length;
  const order = shuffleInPlace(Array.from({ length: n }, (_, i) => i));
  const choices = order.map((i) => q.choices[i]!);
  const correctIndex =
    correctSource >= 0 && correctSource < n ? order.indexOf(correctSource) : -1;
  return {
    prompt: q.prompt,
    choices,
    correctIndex,
    hint: q.hint,
    explanation: q.explanation,
    level: q.level,
    tags: q.tags,
  };
}

/** Shuffle each question’s choices and the question order for a fresh attempt. */
export function prepareQuizQuestions(questions: QuizQuestion[]): ShuffledQuestion[] {
  const prepared = questions.map(shuffleQuestion);
  return shuffleInPlace(prepared);
}
