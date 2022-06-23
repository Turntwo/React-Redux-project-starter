import {
  _getQuestions,
  _getUsers,
  _saveQuestionAnswer,
  _saveQuestion,
} from "../_DATA";
import { answerQuestion, saveQuestion } from "./questions";

export const RECEIVE_DATA = "RECEIVE_DATA";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

function receiveData(users, questions) {
  return {
    type: RECEIVE_DATA,
    users,
    questions,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => {
      console.log("Users", users);
      console.log("Questions", questions);
      dispatch(receiveData(users, questions));
    });
  };
}

export function handleAnswerQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { loggedInUser } = getState();
    return _saveQuestionAnswer({ qid, answer, authedUser: loggedInUser }).then(
      () => {
        console.log(qid, answer, loggedInUser);
        dispatch(answerQuestion(qid, answer, loggedInUser));
      },
      () => alert("Poll Answer could not be saved, please try again.")
    );
  };
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { loggedInUser } = getState();
    const question = {
      author: loggedInUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo,
    };

    return _saveQuestion(question).then(
      (newQuestion) => {
        dispatch(saveQuestion(newQuestion));
      },
      () => alert("Poll Question could not be saved, please try again.")
    );
  };
}
