import type { ReactNode } from 'react';
import { useTilt3D } from '@/hooks/useTilt3D';

interface TiltProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  lift?: number;
}

export function Tilt({ children, className = '', maxTilt = 5, lift = 3 }: TiltProps) {
  const ref = useTilt3D<HTMLDivElement>(maxTilt, 900, lift);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}