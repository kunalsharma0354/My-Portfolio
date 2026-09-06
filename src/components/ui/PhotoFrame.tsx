import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from '@/components/ui/Tilt';

interface PhotoFrameProps {
  src: string;
  alt: string;
  caption?: string;
}

export function PhotoFrame({ src, alt, caption }: PhotoFrameProps) {
  const [touching, setTouching] = useState(false);

  return (
    <Tilt maxTilt={3} lift={2}>
      <figure className="group relative overflow-hidden border border-mono-800 bg-mono-950 p-3 shadow-hard shadow-black/60 sm:p-4">
        <motion.div
          className="relative overflow-hidden border border-mono-700/60 bg-mono-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          onTouchStart={() => setTouching(true)}
          onTouchEnd={() => setTouching(false)}
          onTouchCancel={() => setTouching(false)}
        >
          <motion.img
            src={src}
            alt={alt}
            className={`aspect-[3/4] w-full object-cover grayscale contrast-105 transition-[filter] duration-500 group-hover:grayscale-0 ${
              touching ? 'grayscale-0' : ''
            }`}
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:22px_22px] opacity-60"
          />

          <span aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-mono-400/70" />
          <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-mono-400/70" />
          <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-mono-400/70" />
          <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-mono-400/70" />
        </motion.div>

        {caption ? (
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mono-500">
            {caption}
          </p>
        ) : null}
      </figure>
    </Tilt>
  );
}