import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import PartyCardVue from "~/components/PartyCard.vue";

describe("Card displaying a political party.", () => {
  test("Properly renders the card name.", async () => {
    render(PartyCardVue, {
      props: {
        party: {
          name: "Národní Socialisté",
          description: "A pretty based party imho.",
          representants: [""],
          circleColor: "gold",
        },
      },
    });
    expect(screen.getByText("Národní Socialisté"));
  });
});
