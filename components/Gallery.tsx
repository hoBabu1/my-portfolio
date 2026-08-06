'use client';

import { useEffect, useRef, useState } from 'react';
import Section, { plural } from './Section';

const images = [
  { src: '/gallery/notesOnEllipicCurve.jpg', caption: 'Elliptic curve notes' },
  { src: '/gallery/currentSetup.jpg', caption: 'Current desk setup' },
  { src: '/gallery/hecticday.jpg', caption: 'A hectic day' },
  { src: '/gallery/VdexAmm.jpg', caption: 'VDEX AMM Twitter Space' },
  { src: '/gallery/learningFuzzing.jpg', caption: 'Learning fuzz testing' },
  { src: '/gallery/oldDay.jpg', caption: 'Late-night study session' },
  { src: '/gallery/trading.jpg', caption: 'Chart analysis' },
  { src: '/gallery/cholate.jpg', caption: 'Treats break' },
  { src: '/gallery/speakerat-club.jpg', caption: 'Speaking at Rotaract Club' },
  { src: '/gallery/rizesataixpo.jpg', caption: 'Prizes from Aixpo' },
];

const CARD_WIDTH = 360;
const CARD_HEIGHT = 460;
const GAP = 24;
const PERIOD = images.length * (CARD_WIDTH + GAP);

// Keeps the offset within (-PERIOD, 0] regardless of direction, so any number
// of auto-scroll steps or manual next/prev clicks always lands on real content.
function normalize(offset: number) {
  let o = offset % PERIOD;
  if (o > 0) o -= PERIOD;
  return o;
}

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    let raf: number;
    const speed = 0.6;

    const step = () => {
      if (!pausedRef.current && trackRef.current) {
        offsetRef.current = normalize(offsetRef.current - speed);
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    pausedRef.current = lightbox !== null;
  }, [lightbox]);

  const nudge = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    offsetRef.current = normalize(offsetRef.current - dir * (CARD_WIDTH + GAP));
    track.style.transform = `translateX(${offsetRef.current}px)`;
  };

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((v) => (v === null ? v : (v + 1) % images.length));
      if (e.key === 'ArrowLeft') setLightbox((v) => (v === null ? v : (v - 1 + images.length) % images.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <>
      <Section id="gallery" title="Gallery" meta={plural(images.length, 'photo')}>
        <div
          className="relative group overflow-x-hidden overflow-y-visible py-2"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = lightbox !== null;
          }}
        >
          <div ref={trackRef} className="flex will-change-transform" style={{ gap: GAP }}>
            {[...images, ...images].map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(i % images.length)}
                className="flex-shrink-0 text-left rounded-lg overflow-hidden border border-[var(--th-line)] bg-[var(--th-raised)] transition-transform duration-300 ease-out hover:scale-105 hover:z-10 relative cursor-zoom-in"
                style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                <span className="absolute bottom-0 left-0 right-0 px-3 py-2 text-xs text-white bg-gradient-to-t from-black/70 to-transparent">
                  {img.caption}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 w-9 h-9 rounded-full bg-[var(--th-surface)] border border-[var(--th-line)] flex items-center justify-center text-[var(--th-ink)] shadow-sm hover:border-[var(--th-ink)]"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 w-9 h-9 rounded-full bg-[var(--th-surface)] border border-[var(--th-line)] flex items-center justify-center text-[var(--th-ink)] shadow-sm hover:border-[var(--th-ink)]"
          >
            ›
          </button>
        </div>
      </Section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((v) => (v === null ? v : (v - 1 + images.length) % images.length));
            }}
            aria-label="Previous"
            className="absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((v) => (v === null ? v : (v + 1) % images.length));
            }}
            aria-label="Next"
            className="absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl"
          >
            ›
          </button>

          <div className="flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[lightbox].src}
              alt={images[lightbox].caption}
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-md"
            />
            <p className="text-white text-sm">{images[lightbox].caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
