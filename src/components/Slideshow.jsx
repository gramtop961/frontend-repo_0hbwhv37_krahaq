import './slideshow.css';

const slides = [
  'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1400&auto=format&fit=crop'
];

export default function Slideshow() {
  return (
    <section className="mx-auto max-w-6xl px-6 mt-12">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Automatic Image Slideshow</h3>
      <p className="text-gray-600 mt-1">Pure HTML + CSS animation. Transitions every ~3.5 seconds.</p>

      <div className="relative mt-6 rounded-2xl overflow-hidden shadow-lg ring-1 ring-rose-100/70">
        <div className="slider aspect-[16/9]">
          {slides.map((src, i) => (
            <div key={i} className="slide">
              <img src={src} alt={`Slide ${i+1}`} />
            </div>
          ))}
        </div>
        <div className="dots absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <span key={i} className="dot"></span>
          ))}
        </div>
      </div>
    </section>
  );
}
