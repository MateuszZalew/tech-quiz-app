"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { categories } from "@/app/lib/utils";

export default function QuizSettings() {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [limit, setLimit] = useState(5);

  const handleStartQuiz = () => {
    router.push(
      `/quiz?category=${category}&difficulty=${difficulty}&limit=${limit}`
    );
  };
  return (
    <div className="max-w-[564px] mx-auto">
      <div className="rounded-md bg-gray-200 p-10">
        <div className="mb-4">
          <label htmlFor="category" className="mb-2 block text-sm font-medium">
            Choose category
          </label>
          <select
            id="category"
            name="category"
            className="block w-full cursor-pointer rounded-md border border-gray-400 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="difficulty"
            className="block mb-2 text-sm font-medium"
          >
            Choose difficulty
          </label>
          <select
            id="difficulty"
            name="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="py-2 pl-2 text-sm block w-full cursor-pointer rounded-md border border-gray-400"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="questionsNum"
            className="block mb-2 text-sm font-medium"
          >
            Choose questions number
          </label>
          <input
            type="number"
            id="questionsNum"
            name="questionsNum"
            value={limit}
            onChange={(e) => setLimit(+e.target.value)}
            min={1}
            max={20}
            className="py-2 pl-2 rounded-lg border border-gray-400"
          />
        </div>
      </div>
      <div className="mt-6 px-2 flex justify-between">
        <button className="bg-white text-violet-600 px-8 py-2 border border-violet-600 rounded-lg">
          Clear form
        </button>
        <button
          className="rounded-lg bg-violet-600 px-8 py-2 font-medium text-white hover:bg-violet-500"
          onClick={handleStartQuiz}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
