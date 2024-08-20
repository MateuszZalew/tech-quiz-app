import QuizSettings from "@/components/quiz-settings";

export default function Home() {
  return (
    <main className="pt-32">
      <h1 className="text-4xl text-center">
        The lead gen + marketing checklist for business coaches
      </h1>
      <p className="text-center my-4">
        You&apos;re working in one of the most competitive industries in the
        world. Is your marketing up to the challenge?
      </p>
      <QuizSettings />
    </main>
  );
}
