import { Link } from "react-router-dom"

const Help = () => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 min-w-[220px]">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1.5">Still need help?</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
          Chat with our AI Assistant for personalized support.
        </p>
        <Link to="/ai-assistant">
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            Ask AI Assistant
          </button>
        </Link>
      </div>
  )
}

export default Help