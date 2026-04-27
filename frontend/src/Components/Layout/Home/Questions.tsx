import QuestionIcon from "../../UI/QuestionIcon";
import { allSearchResults } from "../../../data/Search";
import Help from "../../UI/Card/Help";
import Heading from "../../UI/Heading";

const Questions = () => {
  const questionsList = allSearchResults.slice(0, 3);
  return (
    <section className="max-w-5xl mx-auto px-8 pb-12 grid grid-cols-[1fr_auto] gap-6 items-start">
      {/* Questions */}
      <div>
        <Heading title="Popular questions" />
        <div className="flex flex-col gap-3">
          {questionsList.map((question) => {
            const redirectionUrl = question.question.toLowerCase().replace(/\s+/g, "-");

            return (
              <div
                key={question.id}
                className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                <QuestionIcon />
                <a href={`/questions/${redirectionUrl}`}>
                  <span className="group-hover:underline">{question.question}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Help Card */}
      <Help />
    </section>
  );
};

export default Questions;
