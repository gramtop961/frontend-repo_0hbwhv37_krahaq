export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 border-t border-rose-100/70 bg-white/60">
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          © {year} • Your Name • Created for Cognifyz Internship
        </p>
        <p className="text-gray-500">Level 3 – Task 1: Image Manipulation</p>
      </div>
    </footer>
  );
}
