import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";
import { Navigate, useNavigate } from "react-router-dom";

const NewQuestion = ({ dispatch }) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [enabled, setEnabled] = useState(false);

  const nav = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(handleAddQuestion(optionOne, optionTwo));
    setOptionOne("");
    setOptionTwo("");
    setEnabled("");
    nav("/");
  };

  const handleOptionChange = (e, option) => {
    if (option === 1) {
      setOptionOne(e.target.value);
    } else if (option === 2) {
      setOptionTwo(e.target.value);
    }

    setEnabled(optionOne !== "" && optionTwo !== "");
  };

  return (
    <>
      <h1>Would You Rather</h1>
      <h4>Create Your Own Poll</h4>
      <form className="add-question-form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="firstOption">First Option</label>
        </div>
        <div>
          <input
            data-testid="optionOne"
            type="text"
            placerholder="Option One"
            value={optionOne}
            onChange={(e) => handleOptionChange(e, 1)}
          ></input>
        </div>
        <div>
          <label htmlFor="secondOption">Second Option</label>
        </div>
        <div>
          <input
            data-testid="optionTwo"
            type="text"
            placerholder="Option Two"
            value={optionTwo}
            onChange={(e) => handleOptionChange(e, 2)}
          ></input>
        </div>
        <div>
          <button disabled={!enabled}>Submit</button>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    loggedInUser: state.loggedInUser,
  };
};

export default connect(mapStateToProps)(NewQuestion);
