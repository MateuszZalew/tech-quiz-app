import { Question } from "@/app/lib/definitions";

type QuestionsListItemProps = {
  question: Question;
  index: number;
  active: boolean;
  hasSubmittedAnswer: boolean;
  changeCurrentQuestion: (index: number) => void;
};

export default function QuestionsListItem({
  question,
  index,
  active,
  hasSubmittedAnswer,
  changeCurrentQuestion,
}: QuestionsListItemProps) {
  return (
    <div
      key={question.id}
      className={`${
        active
          ? "bg-slate-50 text-blue-500 hover:bg-slate-200"
          : hasSubmittedAnswer
          ? "bg-slate-400 text-black"
          : "bg-blue-500 text-white hover:bg-blue-400"
      }  rounded-md cursor-pointer p-3 text-center `}
      onClick={() => changeCurrentQuestion(index)}
    >
      #{index + 1} Question
    </div>
  );
}
