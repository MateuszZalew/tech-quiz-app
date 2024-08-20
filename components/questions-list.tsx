import { Question, SubmittedAnswer } from "@/app/lib/definitions";
import QuestionsListItem from "./questions-list-item";

type QuestionsListProps = {
  questions: Question[];
  activeQuestionIndex: number;
  submittedAnswers: SubmittedAnswer[];
  changeCurrentQuestion: (id: number) => void;
};

export default function QuestionsList({
  questions,
  activeQuestionIndex,
  submittedAnswers,
  changeCurrentQuestion,
}: QuestionsListProps) {
  return (
    <div className="fixed top-5 left-5 w-[360px]">
      <div className="grid grid-cols-2 gap-3">
        {questions.map((question, index) => (
          <QuestionsListItem
            key={question.id}
            question={question}
            index={index}
            active={activeQuestionIndex === index}
            hasSubmittedAnswer={
              !!submittedAnswers[index].submittedAnswer.length
            }
            changeCurrentQuestion={changeCurrentQuestion}
          />
        ))}
      </div>
    </div>
  );
}
