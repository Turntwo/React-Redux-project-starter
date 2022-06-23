import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../_DATA";

describe("_DATA", () => {
  it("will save a question and return that question async", async () => {
    const question = await _saveQuestion({
      optionOneText: "Test Option One",
      optionTwoText: "Test Option Two",
      author: "jason",
    });

    expect(question.optionOne.text).toEqual("Test Option One");
    expect(question.optionTwo.text).toEqual("Test Option Two");
    expect(question.author).toEqual("jason");
  });

  it("will return an error if invalid data is submitted for a question", async () => {
    await expect(
      _saveQuestion({
        optionTwoText: "Test Option Two",
        author: "jason",
      })
    ).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("will save a question answer async", async () => {
    const id = "vthrdm985a262al8qx3do";
    const user = "sarahedo";
    const res = await _saveQuestionAnswer({
      authedUser: user,
      qid: id,
      answer: "optionOne",
    });

    expect(res).toEqual(true);

    const questions = await _getQuestions();
    const question = questions[id];

    expect(question.optionOne.votes).toContain(user);
  });

  it("will return an error if invalid data is submitted for a question answer", async () => {
    await expect(
      _saveQuestionAnswer({
        authedUser: "invalidUser",
        qid: "invalidId",
      })
    ).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
});
