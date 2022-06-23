import { ANSWER_QUESTION } from "../actions/shared";

export const ADD_QUESTION = "ADD_QUESTION";

export function saveQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function answerQuestion(qid, answer, loggedInUser) {
  return {
    type: ANSWER_QUESTION,
    qid: qid,
    answer: answer,
    loggedInUser: loggedInUser,
  };
}
