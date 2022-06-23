import { ADD_QUESTION } from "../actions/questions";
import { RECEIVE_DATA, ANSWER_QUESTION } from "../actions/shared";

export function questions(state = [], action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.questions;
    case ANSWER_QUESTION:
      console.log(action);
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              action.loggedInUser,
            ]),
          },
        },
      };
    case ADD_QUESTION:
      return { ...state, [action.question.id]: action.question };
    default:
      return state;
  }
}
