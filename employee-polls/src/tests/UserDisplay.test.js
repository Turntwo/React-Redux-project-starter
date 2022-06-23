import * as React from "react";
import { render } from "@testing-library/react";
import UserDisplay from "../components/UserDisplay";
import Leaderboard from "../components/Leaderboard";
import { createStore } from "redux";
import reducer from "../reducers/index";
import middleware from "../middleware/index";
import { Provider } from "react-redux";

describe("UserDisplay", () => {
  const user = {
    id: "sarahedo",
    password: "password123",
    name: "Sarah Edo",
    avatarURL: "http://avatar.windsor.io/SarahEdo",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  };

  it("will match snapshot with no name", async () => {
    const view = render(<UserDisplay key={user.id} user={user} />);
    expect(view).toMatchSnapshot();
  });

  it("will display count columns", async () => {
    const view = render(<UserDisplay key={user.id} user={user} />);
    expect(view.getByTestId("questions")).toBeInTheDocument();
    expect(view.getByTestId("answers")).toBeInTheDocument();
  });
});
