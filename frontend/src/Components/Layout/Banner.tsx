import { BannerImg } from "../UI/BannerImg";

const Banner = () => {
  return (
    <section className="max-w-5xl mx-auto px-8 py-12 grid grid-cols-2 gap-8 items-center">
      {/* Left Content */}
      <div>
        {/* Badge to indicate AI-powered assistance to users */}
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
          AI-Powered Help Center
        </div>

        {/* Main heading and subheading */}
        <h1 className="text-3xl font-bold leading-tight text-gray-900 mb-3">
          How can we help you today?
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          Find answers to your insurance questions
          <br />
          or ask our AI assistant.
        </p>

        {/* Search */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search for answers, topics or ask a question..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Search
          </button>
        </div>
      </div>
      <BannerImg />
    </section>
  );
};

export default Banner;
