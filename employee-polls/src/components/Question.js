import "./Question.css";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/shared";
import PageNotFound from "./PageNotFound";

const Question = ({ questions, loggedInUser, users, dispatch }) => {
  const params = useParams();
  const question = questions[params.questionId];

  if (!question) return <Navigate to="/notfound" />;

  const author = users[question?.author];

  const hasLoggedInUserAnswered = Object.keys(
    users[loggedInUser].answers
  ).includes(params.questionId);

  const userAnswer =
    hasLoggedInUserAnswered && users[loggedInUser].answers[params.questionId];

  const optionOneVotes = hasLoggedInUserAnswered
    ? question["optionOne"].votes.length
    : null;

  const optionTwoVotes = hasLoggedInUserAnswered
    ? question["optionTwo"].votes.length
    : null;

  console.log("Answer:", userAnswer);

  const handlePollChoice = (answer) => {
    dispatch(handleAnswerQuestion(params.questionId, answer));
  };

  const getPercent = (votes) => {
    return ((votes * 100) / (optionOneVotes + optionTwoVotes)).toFixed(2);
  };

  return (
    <>
      <h3>Poll by {author?.name}</h3>
      <img
        src={author?.avatarURL}
        alt="Avatar for author.name"
        className="author-image"
      />
      <h3>Would You Rather...</h3>
      <span>
        <button
          disabled={hasLoggedInUserAnswered}
          className={`poll-button ${
            hasLoggedInUserAnswered
              ? userAnswer === "optionOne"
                ? "selected-answer"
                : "unselected-answer"
              : ""
          }`}
          onClick={() => handlePollChoice("optionOne")}
        >
          <div>{question.optionOne.text}</div>
          {hasLoggedInUserAnswered ? (
            <div className="vote-count">
              Votes: {optionOneVotes} | {getPercent(optionOneVotes)}%
            </div>
          ) : (
            ""
          )}
        </button>
        <button
          disabled={hasLoggedInUserAnswered}
          className={`poll-button ${
            hasLoggedInUserAnswered
              ? userAnswer === "optionTwo"
                ? "selected-answer"
                : "unselected-answer"
              : ""
          }`}
          onClick={() => handlePollChoice("optionTwo")}
        >
          <div>{question.optionTwo.text}</div>
          {hasLoggedInUserAnswered ? (
            <div className="vote-count">
              Votes: {optionTwoVotes} | {getPercent(optionTwoVotes)}%
            </div>
          ) : (
            ""
          )}
        </button>
      </span>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions,
    users: state.users,
    loggedInUser: state.loggedInUser,
  };
};

export default connect(mapStateToProps)(Question);
