import React, { useEffect, useRef, useState } from 'react';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number; // ms before starting
  speed?: number; // ms per character
  tag?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
}

const RevealText: React.FC<RevealTextProps> = ({
  text,
  className = '',
  delay = 0,
  speed = 40,
  tag: Tag = 'span',
}) => {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(0); // number of chars revealed
  const [colored, setColored] = useState(0);   // "wave front" char index
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let i = 0;
          const timeout = setTimeout(() => {
            const interval = setInterval(() => {
              i++;
              setRevealed(i);
              setColored(i);
              if (i >= text.length) {
                clearInterval(interval);
                setTimeout(() => setColored(-1), 300);
              }
            }, speed);
          }, delay);
          return () => clearTimeout(timeout);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [text, delay, speed]);

  // Split into words so letters never break in the middle of a word.
  const words = text.split(' ');
  let globalIndex = -1; // running char index across the whole text

  return (
    <Tag ref={ref as any} className={className} aria-label={text}>
      {words.map((word, wi) => {
        const charEls = word.split('').map((char) => {
          globalIndex++;
          const i = globalIndex;
          const isRevealed = i < revealed;
          const isAccent = colored !== -1 && i >= colored - 3 && i < colored;
          return (
            <span
              key={i}
              style={{
                opacity: isRevealed ? 1 : 0,
                color: isAccent ? '#848cf7' : 'inherit',
                transition: isAccent
                  ? 'color 0.3s ease'
                  : 'color 0.6s ease, opacity 0.1s ease',
              }}
            >
              {char}
            </span>
          );
        });
        // account for the space that followed this word (except last)
        if (wi < words.length - 1) globalIndex++;
        return (
          <React.Fragment key={wi}>
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>{charEls}</span>
            {wi < words.length - 1 ? ' ' : null}
          </React.Fragment>
        );
      })}
    </Tag>
  );
};

export default RevealText;
