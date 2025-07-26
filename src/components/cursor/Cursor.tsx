"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element && (e.target.matches('a, button') || e.target.closest('a, button'))) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
        if (e.target instanceof Element && (e.target.matches('a, button') || e.target.closest('a, button'))) {
            setIsHovering(false);
        }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          'hidden md:block fixed w-8 h-8 border-2 border-primary rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] transition-transform duration-300 ease-in-out',
          isHovering ? 'scale-150' : 'scale-100'
        )}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={cn(
            'hidden md:block fixed w-1.5 h-1.5 bg-primary rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] transition-opacity duration-300 ease-in-out',
            isHovering ? 'opacity-0' : 'opacity-100'
        )}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}
