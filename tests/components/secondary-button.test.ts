import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import SecondaryButtonVue from "~/components/SecondaryButton.vue";

describe("Secondary button.", () => {
  test("Properly renders the button.", async () => {
    render(SecondaryButtonVue, { props: { text: "Hello", red: "false" } });
    expect(screen.getByText("Hello")).toBeDefined();
  });

  test("Properly renders the button with red.", async () => {
    render(SecondaryButtonVue, { props: { text: "Hello", red: true } });
    expect(screen.getByText("Hello").classList.contains("red")).toBe(true);
  });

  test("Properly renders the button with blue.", async () => {
    render(SecondaryButtonVue, { props: { text: "Hello", red: false } });
    expect(screen.getByText("Hello").classList.contains("blue")).toBe(true);
  });
});
