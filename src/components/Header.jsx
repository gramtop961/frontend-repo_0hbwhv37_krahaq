import Spline from '@splinetool/react-spline';

export default function Header() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to blend with brand, doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-50/70 via-white/40 to-white"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-start justify-between px-6 pt-6">
        {/* Title */}
        <div className="mt-14 sm:mt-24">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-800 drop-shadow-sm">
            Level 3 – Task 1: Image Manipulation
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Internship Project Website
          </p>
        </div>

        {/* Cognifyz logo top-right */}
        <a
          href="#about"
          className="rounded-xl bg-white/70 backdrop-blur border border-rose-100 shadow-sm hover:shadow-md transition-all p-2 sm:p-3"
          aria-label="Cognifyz"
        >
          <img
            src="https://dummyimage.com/120x40/111827/ffffff&text=Cognifyz"
            alt="Cognifyz logo"
            className="h-6 sm:h-8 w-auto object-contain"
          />
        </a>
      </div>
    </section>
  );
}
