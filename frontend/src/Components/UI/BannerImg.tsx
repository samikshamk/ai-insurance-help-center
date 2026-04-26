export const BannerImg = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-72 h-56 bg-indigo-50 rounded-2xl overflow-hidden">
        <div className="absolute w-40 h-40 bg-indigo-100 rounded-full top-4 right-4" />

        <div className="absolute top-6 right-14 w-12 h-14 bg-indigo-600 rounded-t-lg rounded-b-full flex items-center justify-center z-10">
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
            <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" />
          </svg>
        </div>

        <div className="absolute top-5 right-5 bg-teal-400 rounded-xl px-2.5 py-1.5 flex gap-1 items-center z-10">
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>

        <div className="absolute bottom-0 left-5 w-28 h-36 bg-indigo-200 rounded-t-xl flex flex-col items-center justify-end pb-3 gap-2">
          <div className="w-9 h-9 bg-amber-200 rounded-full absolute top-5" />
          <div className="w-16 h-10 bg-indigo-500 rounded-md opacity-80" />
        </div>

        <div className="absolute bottom-10 right-8 space-y-1.5">
          {[60, 44, 52].map((w, i) => (
            <div
              key={i}
              className="h-1 bg-indigo-200 rounded-full"
              style={{ width: w }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
