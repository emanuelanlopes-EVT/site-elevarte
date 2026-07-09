import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

// Marca "E" da Elevarte — três barras em movimento, recriadas em SVG.
const Logo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', color = '#848cf7' }) => (
  <svg
    viewBox="0 0 98 126"
    className={className}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Elevarte"
    role="img"
  >
    <path d="M15 0 L78 0 L60 30 L15 30 A15 15 0 0 0 15 0 Z" />
    <path d="M15 48 L92 48 L74 78 L15 78 A15 15 0 0 0 15 48 Z" />
    <path d="M33 96 L92 96 L74 126 L33 126 A15 15 0 0 0 33 96 Z" />
  </svg>
);

export default Logo;
