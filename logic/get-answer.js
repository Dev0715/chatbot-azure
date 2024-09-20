const { qnaList, REPLY_NOT_READY } = require("../data/question-answer-list");

const getAnswer = (question) => {
  const _qna = qnaList.find(
    (qna) => qna.q.trim().toLowerCase() === question.trim().toLowerCase()
  );
  return _qna?.a ?? REPLY_NOT_READY;
};

module.exports = { getAnswer };
