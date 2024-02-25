import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import PartyCardVue from "~/components/PartyCard.vue";

test("properly handles v-model", async () => {
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
