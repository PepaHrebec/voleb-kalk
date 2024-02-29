import { test, describe, expect } from "vitest";
import { screen } from "@testing-library/vue";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import IntroButtonsVue from "~/components/IntroButtons.vue";

describe("Intro buttons", () => {
  test("Buttons render properly.", async () => {
    await renderSuspended(IntroButtonsVue, {
      props: {
        forward: "/kalkulacka/intro/2",
        back: "/",
        forwardText: "",
        backText: "",
      },
    });
    expect(screen.getAllByRole("button").length === 2).toBe(true);
  });

  test("Buttons render text properly.", async () => {
    await renderSuspended(IntroButtonsVue, {
      props: {
        forward: "/kalkulacka/intro/2",
        back: "/",
        forwardText: "Next",
        backText: "Back",
      },
    });
    expect(screen.getByText("Next")).toBeDefined();
    expect(screen.getByText("Back")).toBeDefined();
  });
});
