import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewQuestion from "../components/NewQuestion";
import { createStore } from "redux";
import reducer from "../reducers/index";
import middleware from "../middleware/index";
import { Provider } from "react-redux";

describe("AddQuestion", () => {
  it("will update text when onChange is fired", () => {
    const store = createStore(reducer, middleware);
    const form = render(
      <Provider store={store}>
        <NewQuestion />
      </Provider>
    );
    var optionOne = form.getByTestId("optionOne");

    fireEvent.change(optionOne, { target: { value: "testValue" } });
    expect(optionOne.value).toEqual("testValue");
  });

  it("will clear text when submitted", () => {
    const store = createStore(reducer, middleware);
    const form = render(
      <Provider store={store}>
        <NewQuestion />
      </Provider>
    );
    var optionOne = form.getByTestId("optionOne");
    var optionTwo = form.getByTestId("optionTwo");
    var submit = form.getByText("Submit");

    fireEvent.change(optionOne, { target: { value: "testValue" } });
    fireEvent.change(optionTwo, { target: { value: "testValue2" } });
    expect(optionOne.value).toEqual("testValue");
    expect(optionTwo.value).toEqual("testValue2");
    fireEvent.submit(submit);
    expect(optionOne.value).toEqual("");
  });
});
