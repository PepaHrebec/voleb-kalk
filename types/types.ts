import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface ParsedParties extends ParsedContent {
  parties: {
    name: string;
    description: string;
    circleColor: string;
  }[];
}

export interface ParsedQuestions extends ParsedContent {
  questions: {
    title: string;
    description: string;
    details: string;
  }[];
}
