import "./QuestionList.css";
import { useState } from "react";
import { connect } from "react-redux";
import QuestionListDisplay from "./QuestionListDisplay";

const QuestionList = ({ users, questions, loggedInUser, dispatch }) => {
  const [showNew, setShowNew] = useState(true);

  const userAnsweredQuestions = Object.keys(users[loggedInUser].answers);
  console.log("User Questions:", userAnsweredQuestions);
  console.log("Questions:", questions);
  return (
    <>
      <h3>
        <button className="toggle-button" onClick={() => setShowNew(!showNew)}>
          <h3>{showNew ? "New" : "Answered"}</h3>
        </button>
        Questions
      </h3>
      <ul>
        {Object.values(questions)
          .filter((q) =>
            showNew
              ? !userAnsweredQuestions.includes(q.id)
              : userAnsweredQuestions.includes(q.id)
          )
          .sort((a, b) => b.timestamp - a.timestamp)
          .map((q) => (
            <QuestionListDisplay
              key={q.id}
              question={q}
              author={users[q.author]}
            />
          ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    questions: state.questions,
    loggedInUser: state.loggedInUser,
  };
};

export default connect(mapStateToProps)(QuestionList);
