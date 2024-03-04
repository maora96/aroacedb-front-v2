export function Sidebar() {
  return (
    <aside className="border-r border-l border-b border-lightgreen h-full w-1/6 p-6 overflow-y-auto">
      <h5 className="mb-4 text-base font-medium text-neutral-800 dark:text-neutral-50 uppercase text-center w-full">
        you are searching for
      </h5>
      <div className="flex gap-y-4 w-full justify-between">
        <button
          type="button"
          className="text-green bg-lightestgray shadow-sm sm:text-sm rounded-lg text-sm px-6 py-1.5 uppercase border border-lightgreen"
        >
          Characters
        </button>
        <button
          type="button"
          className="text-green bg-lightestgray shadow-sm sm:text-sm rounded-lg text-sm px-6 py-1.5 uppercase border border-lightgreen"
        >
          Stories
        </button>
      </div>
    </aside>
  );
}
