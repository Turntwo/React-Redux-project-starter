import { RECEIVE_DATA, ANSWER_QUESTION } from "../actions/shared";
import { ADD_QUESTION } from "../actions/questions";

export function users(state = [], action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.users;
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.loggedInUser]: {
          ...state[action.loggedInUser],
          answers: {
            ...state[action.loggedInUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat(
            action.question.id
          ),
        },
      };
    default:
      return state;
  }
}
