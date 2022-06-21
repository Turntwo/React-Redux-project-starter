import { _getQuestions, _getUsers } from "../_DATA";

export const RECEIVE_DATA = "RECEIVE_DATA";

function receiveData(users, questions) {
  return {
    type: RECEIVE_DATA,
    users,
    questions,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    Promise.all([_getUsers(), _getQuestions]).then(([users, questions]) => {
      console.log("Users", users);
      console.log("Questions", questions);
      dispatch(receiveData(users, questions));
    });
  };
}
