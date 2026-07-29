"use client";

import { useCallback, useEffect, useId, useMemo, useState } from "react";
import katex from "katex";
import {
  answerLetterToIndex,
  indexToAnswerLetter,
  type QuizQuestion,
} from "./quiz-types";

export type LearnQuizProps = {
  title?: string;
  questions: QuizQuestion[];
  lessonId: string;
};

type Phase = "intro" | "question" | "results";

function renderInlineMath(text: string): string {
  // Escape HTML first, then replace $...$ and \(...\) with KaTeX.
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const replaceMath = (input: string, pattern: RegExp, display: boolean) =>
    input.replace(pattern, (_, tex: string) => {
      try {
        return katex.renderToString(tex, {
          throwOnError: false,
          displayMode: display,
          output: "html",
        });
      } catch {
        return `<code>${tex}</code>`;
      }
    });

  let out = replaceMath(escaped, /\\\((.+?)\\\)/g, false);
  out = replaceMath(out, /\$([^$\n]+?)\$/g, false);
  return out;
}

function MathText({ text, className }: { text: string; className?: string }) {
  const html = useMemo(() => renderInlineMath(text), [text]);
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

function scoreMessage(correct: number, total: number): string {
  const ratio = total === 0 ? 0 : correct / total;
  if (ratio === 1) return "All correct. Nice.";
  if (ratio >= 0.75) return "Mostly solid. Skim the ones you missed and try again if you want.";
  if (ratio >= 0.5) return "Halfway there. Worth another pass through the lesson.";
  return "Rough round. Re-read the lesson and retry whenever you're ready.";
}

export default function LearnQuiz({ title, questions, lessonId }: LearnQuizProps) {
  const baseId = useId();
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [hintOpen, setHintOpen] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const total = questions.length;
  const q = questions[index];
  const correctIndex = q ? answerLetterToIndex(q.answer) : -1;

  const clearProgress = useCallback(() => {
    setIndex(0);
    setSelected(null);
    setRevealed(false);
    setCorrectCount(0);
    setHintOpen(false);
  }, []);

  const resetQuiz = useCallback(() => {
    setPhase("intro");
    clearProgress();
    setAttempt((a) => a + 1);
  }, [clearProgress]);

  const startQuiz = () => {
    setPhase("question");
    clearProgress();
  };

  const retryQuiz = () => {
    setPhase("question");
    clearProgress();
    setAttempt((a) => a + 1);
  };

  const pickChoice = (choiceIndex: number) => {
    if (revealed || !q) return;
    setSelected(choiceIndex);
    setRevealed(true);
    if (choiceIndex === correctIndex) {
      setCorrectCount((c) => c + 1);
    }
  };

  const goNext = () => {
    if (index + 1 >= total) {
      setPhase("results");
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setRevealed(false);
    setHintOpen(false);
  };

  // Close accordion does not wipe score mid-quiz; retry is explicit.
  useEffect(() => {
    // lessonId is reserved for future analytics; keep stable per mount.
    void lessonId;
  }, [lessonId]);

  if (total < 2) return null;

  const heading = title?.trim() || "Check your understanding";
  const percent = total === 0 ? 0 : Math.round((correctCount / total) * 100);

  return (
    <section className="learn-quiz" aria-label={heading} data-lesson={lessonId}>
      <details
        className="learn-quiz-accordion"
        open={open}
        onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
      >
        <summary className="learn-quiz-summary">
          <span className="learn-quiz-summary-main">
            <span className="learn-quiz-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 11l3 3L22 4"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="learn-quiz-summary-text">
              <span className="learn-quiz-summary-title">{heading}</span>
              <span className="learn-quiz-summary-sub">Optional practice quiz</span>
            </span>
          </span>
          <span className="learn-quiz-meta">
            <span className="learn-quiz-count">
              {total === 1 ? "1 question" : `${total} questions`}
            </span>
            <span className="learn-quiz-chevron" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
        </summary>

        <div className="learn-quiz-panel" key={attempt}>
          {phase === "intro" && (
            <div className="learn-quiz-intro">
              <div className="learn-quiz-intro-art" aria-hidden="true">
                <div className="learn-quiz-blob" />
                <div className="learn-quiz-card-stack">
                  <span>A</span>
                  <span>B</span>
                  <span>C</span>
                </div>
              </div>
              <div className="learn-quiz-intro-copy">
                <p>
                  A short check on what this lesson covers. Wrong answers show the right one.
                  You can retry as often as you like.
                </p>
                <button type="button" className="learn-quiz-btn learn-quiz-btn-primary" onClick={startQuiz}>
                  Start quiz
                </button>
              </div>
            </div>
          )}

          {phase === "question" && q && (
            <div className="learn-quiz-question" role="group" aria-labelledby={`${baseId}-prompt`}>
              <div className="learn-quiz-progress">
                <span className="learn-quiz-progress-label">
                  {index + 1} / {total}
                </span>
                <div
                  className="learn-quiz-progress-track"
                  role="progressbar"
                  aria-valuemin={1}
                  aria-valuemax={total}
                  aria-valuenow={index + 1}
                  aria-label="Quiz progress"
                >
                  <div
                    className="learn-quiz-progress-fill"
                    style={{ width: `${((index + 1) / total) * 100}%` }}
                  />
                </div>
              </div>

              <h3 id={`${baseId}-prompt`} className="learn-quiz-prompt">
                <MathText text={q.prompt} />
              </h3>

              {q.hint && (
                <div className="learn-quiz-hint">
                  <button
                    type="button"
                    className="learn-quiz-hint-toggle"
                    aria-expanded={hintOpen}
                    onClick={() => setHintOpen((v) => !v)}
                  >
                    Hint
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d={hintOpen ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {hintOpen && (
                    <p className="learn-quiz-hint-body">
                      <MathText text={q.hint} />
                    </p>
                  )}
                </div>
              )}

              <ul className="learn-quiz-choices" role="listbox" aria-label="Answer choices">
                {q.choices.map((choice, i) => {
                  const letter = indexToAnswerLetter(i);
                  const isSelected = selected === i;
                  const isCorrect = i === correctIndex;
                  let stateClass = "";
                  if (revealed) {
                    if (isCorrect) stateClass = "is-correct";
                    else if (isSelected) stateClass = "is-wrong";
                    else stateClass = "is-dim";
                  } else if (isSelected) {
                    stateClass = "is-selected";
                  }

                  return (
                    <li key={`${index}-${letter}`}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        className={`learn-quiz-choice ${stateClass}`}
                        disabled={revealed}
                        onClick={() => pickChoice(i)}
                      >
                        <span className="learn-quiz-choice-letter">{letter}</span>
                        <span className="learn-quiz-choice-text">
                          <MathText text={choice} />
                        </span>
                        {revealed && isCorrect && (
                          <span className="learn-quiz-choice-mark" aria-hidden="true">
                            ✓
                          </span>
                        )}
                        {revealed && isSelected && !isCorrect && (
                          <span className="learn-quiz-choice-mark is-wrong-mark" aria-hidden="true">
                            ✕
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="learn-quiz-feedback" aria-live="polite">
                {revealed && (
                  <>
                    <p
                      className={`learn-quiz-feedback-status ${
                        selected === correctIndex ? "ok" : "bad"
                      }`}
                    >
                      {selected === correctIndex ? "Correct" : "Not quite"}
                    </p>
                    {selected !== correctIndex && correctIndex >= 0 && (
                      <p className="learn-quiz-feedback-answer">
                        <span className="learn-quiz-feedback-answer-label">Answer:</span>{" "}
                        <span className="learn-quiz-feedback-answer-letter">
                          {indexToAnswerLetter(correctIndex)}
                        </span>
                        <span className="learn-quiz-feedback-answer-text">
                          <MathText text={q.choices[correctIndex] ?? ""} />
                        </span>
                      </p>
                    )}
                    {q.explanation && (
                      <p className="learn-quiz-feedback-explain">
                        <MathText text={q.explanation} />
                      </p>
                    )}
                  </>
                )}
              </div>

              <div className="learn-quiz-actions">
                <button
                  type="button"
                  className="learn-quiz-btn learn-quiz-btn-primary"
                  disabled={!revealed}
                  onClick={goNext}
                >
                  {index + 1 >= total ? "See results" : "Next"}
                </button>
              </div>
            </div>
          )}

          {phase === "results" && (
            <div className="learn-quiz-results">
              <div className="learn-quiz-score-ring" aria-hidden="true">
                <svg viewBox="0 0 96 96" width="96" height="96">
                  <circle className="learn-quiz-ring-bg" cx="48" cy="48" r="40" />
                  <circle
                    className="learn-quiz-ring-fg"
                    cx="48"
                    cy="48"
                    r="40"
                    style={{
                      strokeDasharray: `${2 * Math.PI * 40}`,
                      strokeDashoffset: `${2 * Math.PI * 40 * (1 - correctCount / total)}`,
                    }}
                  />
                </svg>
                <div className="learn-quiz-score-num">
                  <strong>
                    {correctCount}/{total}
                  </strong>
                  <span>{percent}%</span>
                </div>
              </div>
              <div className="learn-quiz-results-copy">
                <h3>Your score</h3>
                <p aria-live="polite">{scoreMessage(correctCount, total)}</p>
                <div className="learn-quiz-actions">
                  <button
                    type="button"
                    className="learn-quiz-btn learn-quiz-btn-primary"
                    onClick={retryQuiz}
                  >
                    Retry quiz
                  </button>
                  <button
                    type="button"
                    className="learn-quiz-btn learn-quiz-btn-ghost"
                    onClick={resetQuiz}
                  >
                    Back to start
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </details>
    </section>
  );
}
