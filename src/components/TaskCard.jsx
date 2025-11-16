export default function TaskCard() {
  return (
    <section className="mx-auto max-w-6xl px-6 -mt-10 sm:-mt-16 relative z-20">
      <div className="rounded-2xl bg-white/80 backdrop-blur border border-rose-100 shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Image Manipulation Task</h2>
        <p className="mt-2 text-gray-600">
          Use CSS to create a basic image gallery with thumbnail images that enlarge when clicked.
        </p>
        <p className="mt-1 text-gray-600">
          Implement a simple image slideshow that automatically transitions between images using only HTML and CSS.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-600">
          <span className="rounded-full bg-rose-50 text-rose-700 px-3 py-1">HTML</span>
          <span className="rounded-full bg-sky-50 text-sky-700 px-3 py-1">CSS</span>
          <span className="rounded-full bg-indigo-50 text-indigo-700 px-3 py-1">Responsive</span>
        </div>
      </div>
    </section>
  );
}
