import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface Party {
  name: string;
  description: string;
  shortcut: string;
  representatives: string[];
  color: string;
}

export interface ParsedParties extends ParsedContent {
  parties: Party[];
}

export interface ParsedAnswers extends ParsedContent {
  answers: {
    shortcut: string;
    name: string;
    partyAnswers: number[];
  }[];
}

export interface ParsedQuestions extends ParsedContent {
  questions: Question[];
}

export interface Question {
  title: string;
  description: string;
  details: string;
}
