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
