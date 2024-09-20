import { REPLY_NOT_READY } from "../data/question-answer-list";
import { qnaList } from "./data/question-answer-list";

export const getAnswer = (question) => {
  const _qna = qnaList.find((qna) => qna.q.trim() === question.trim());
  return _qna.a ?? REPLY_NOT_READY;
};
