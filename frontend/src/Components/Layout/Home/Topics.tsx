import topics from "../../../data/topics";

const Topics = () => {
  return (
    <section className="max-w-5xl mx-auto px-8 pb-10">
      <h2 className="text-md font-semibold text-gray-900 mb-4">
        Browse popular topics
      </h2>
      <div className="grid grid-cols-5 gap-3">
        {topics.map((topic) => (
          <div
            key={topic.name}
            className="bg-white border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-indigo-200 hover:shadow-sm transition-all group"
          >
            <div
              className={`w-10 h-10 ${topic.bg} ${topic.iconColor} rounded-xl flex items-center justify-center mb-3`}
            >
              {topic.icon}
            </div>
            <p className="text-sm font-semibold text-gray-900 mb-1">
              {topic.name}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed mb-2">
              {topic.desc}
            </p>
            <span className="text-xs font-medium text-indigo-600 group-hover:underline">
              Explore →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Topics;
