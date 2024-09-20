const {
  qnaList,
  REPLY_NOT_READY,
  REPLY_NO_ANSWER,
} = require("../data/question-answer-list");

let queList = [];

const getAnswer = (_question) => {
  let question = _question.trim().toLowerCase();

  if (queList.length) {
    const _que = queList.find(
      (que) => que.que.trim().toLowerCase() === question
    );
    if (_que) {
      queList = [];
      return _que.ans;
    }
  }

  const _qna = qnaList.find((qna) => qna.que.trim().toLowerCase() === question);
  if (_qna) {
    queList = _qna.replies ?? [];
    return _qna.ans;
  }

  const replyText = queList.length ? REPLY_NO_ANSWER : REPLY_NOT_READY;
  queList = [];

  return replyText;
};

module.exports = { getAnswer };
