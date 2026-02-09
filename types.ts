export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
}

export interface Quote {
  text: string;
  author: string;
}

export enum AppSection {
  HOME = 'HOME',
  QUIZ = 'QUIZ',
  QUOTES = 'QUOTES',
  POEM = 'POEM'
}