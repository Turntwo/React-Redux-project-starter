import * as React from "react";
import { render } from "@testing-library/react";
import Leaderboard from "../components/Leaderboard";
import { createStore } from "redux";
import reducer from "../reducers/index";
import middleware from "../middleware/index";
import { Provider } from "react-redux";

describe("Leaderboard", () => {
  const store = createStore(reducer, middleware);
  it("will match snapshot", async () => {
    const view = render(
      <Provider store={store}>
        <Leaderboard />
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });
});
