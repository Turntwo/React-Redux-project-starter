import * as React from "react";
import { render } from "@testing-library/react";
import Nav from "../components/Nav";
import { MemoryRouter } from "react-router-dom";

describe("Nav", () => {
  it("will display the expected Navigation Links", () => {
    const view = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    expect(view.getByText("Home")).toBeInTheDocument();
    expect(view.getByText("Leaderboard")).toBeInTheDocument();
    expect(view.getByText("New")).toBeInTheDocument();
  });
});
