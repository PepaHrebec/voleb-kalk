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
      },
    });
    expect((await screen.findAllByRole("button")).length === 2).toBe(true);
  });
});
