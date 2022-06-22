export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function addQuestion(userId) {
  return {
    type: ADD_QUESTION,
    userId,
  };
}

export function answerQuestion() {
  return {
    type: ANSWER_QUESTION,
  };
}
