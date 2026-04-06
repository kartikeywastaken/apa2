import { ReactNode } from 'react';
import './GlowCard.css';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = '' }: GlowCardProps) {
  return (
    <div className={`glow-card ${className}`}>
      {children}
    </div>
  );
}
