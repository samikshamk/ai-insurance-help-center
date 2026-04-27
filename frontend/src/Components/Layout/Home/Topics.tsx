import topics from "../../../data/topics";
import Description from "../../UI/Description";
import Heading from "../../UI/Heading";

const Topics = () => {
  return (
    <section className="max-w-5xl mx-auto px-8 pb-10">
      <Heading title="Browse popular topics" />
      <div className="grid grid-cols-5 gap-3">
        {topics.map((topic) => (
          <div
            key={topic.name}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 cursor-pointer hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-sm transition-all group"
          >
            <div
              className={`w-10 h-10 ${topic.bg} ${topic.iconColor} rounded-xl flex items-center justify-center mb-3`}
            >
              {topic.icon}
            </div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
              {topic.name}
            </p>
            <Description content={topic.desc} />
            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 group-hover:underline">
              Explore →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Topics;
