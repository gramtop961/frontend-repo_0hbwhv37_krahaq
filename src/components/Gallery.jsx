import './gallery.css';

const images = [
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop'
];

export default function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 mt-10">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Image Gallery</h3>
      <p className="text-gray-600 mt-1">Click any image to view it larger. CSS-only modal with target selector.</p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <a key={i} href={`#img-${i}`} className="group block">
            <img src={src} alt={`Gallery ${i+1}`} className="h-32 sm:h-36 md:h-40 w-full object-cover rounded-xl shadow-sm ring-1 ring-rose-100/60 transition-transform duration-300 group-hover:scale-[1.03]" />
          </a>
        ))}
      </div>

      {/* Lightbox overlays */}
      {images.map((src, i) => (
        <div key={i} id={`img-${i}`} className="lightbox fixed inset-0 hidden items-center justify-center p-6">
          <a href="#gallery" className="absolute inset-0 bg-black/50"></a>
          <img src={src} alt={`Large ${i+1}`} className="relative max-h-[80vh] w-auto rounded-2xl shadow-2xl border border-white/50" />
        </div>
      ))}
    </section>
  );
}
