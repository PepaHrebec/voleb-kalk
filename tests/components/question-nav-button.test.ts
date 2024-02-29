import { test, describe, expect } from "vitest";
import { screen } from "@testing-library/vue";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import QuestionNavButtonsVue from "~/components/QuestionNavButtons.vue";

describe("Buttons navigating questions", () => {
  test("Arrows render properly.", async () => {
    await renderSuspended(QuestionNavButtonsVue, {
      props: {
        currentQuestionNum: 2,
        listLength: 4,
      },
    });
    expect(screen.getByText("<-")).toBeDefined();
    expect(screen.getByText("->")).toBeDefined();
  });

  test("Arrows render properly on the first question.", async () => {
    await renderSuspended(QuestionNavButtonsVue, {
      props: {
        currentQuestionNum: 1,
        listLength: 4,
      },
    });
    expect(screen.getByText("<-").classList.contains("disabled")).toBe(true);
    expect(screen.getByText("->").classList.contains("disabled")).toBe(false);
  });

  test("Arrows render properly on the last question.", async () => {
    await renderSuspended(QuestionNavButtonsVue, {
      props: {
        currentQuestionNum: 4,
        listLength: 4,
      },
    });
    expect(screen.getByText("<-").classList.contains("disabled")).toBe(false);
    expect(screen.getByText("->").classList.contains("disabled")).toBe(true);
  });
});
