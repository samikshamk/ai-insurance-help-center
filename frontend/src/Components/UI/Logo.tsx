const Logo = () => {
  return (
    <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" />
          </svg>
        </div>
        <span className="font-bold text-sm text-gray-900">InsureCare</span>
      </div>
  )
}

export default Logo