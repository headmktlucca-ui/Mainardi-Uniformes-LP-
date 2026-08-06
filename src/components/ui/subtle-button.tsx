import React, { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

interface SubtleButtonProps {
  onClick?: () => void;
  text?: string;
  className?: string;
  id?: string;
}

export default function SubtleButton({
  onClick,
  text = 'Solicitar Orçamento',
  className = '',
  id = 'btn-solicitar-orcamento',
}: SubtleButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      id={id}
      onClick={onClick}
      className={`group relative border-2 flex justify-center items-center gap-3 border-amber-300/80 bg-[#E5A823] hover:bg-emerald-600 hover:border-emerald-500 rounded-full px-5 h-12 
                 transition-all duration-500 ease-out shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-emerald-600/30 
                 hover:scale-105 active:scale-95 overflow-hidden cursor-pointer ${className}
                 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                 before:via-white/30 before:to-transparent before:translate-x-[-100%] 
                 hover:before:translate-x-[100%] before:transition-transform before:duration-700`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Text */}
      <span className="text-neutral-950 font-black tracking-wide text-xs sm:text-sm uppercase transition-colors duration-300 
                       group-hover:text-white relative z-10 flex items-center gap-2">
        <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
        <span>{text}</span>
      </span>

      {/* Animated dot */}
      <span
        className={`relative z-10 w-3.5 h-3.5 bg-neutral-950 rounded-full transition-all duration-500 ease-out
                   ${isHovered ? 'bg-white shadow-lg shadow-white/60 scale-110' : ''}
                   ${isPressed ? 'scale-90' : ''}
                   before:absolute before:inset-0 before:bg-white before:rounded-full 
                   before:animate-pulse before:opacity-0 group-hover:before:opacity-40`}
      >
        {/* Ripple effect */}
        <div
          className="absolute inset-0 rounded-full bg-white animate-ping opacity-0 group-hover:opacity-75"
          style={{ animationDuration: '2s' }}
        />
      </span>

      {/* Hover state border animation */}
      <div className="absolute inset-0 rounded-full border-2 border-white/0 
                      group-hover:border-white/30 transition-all duration-500 
                      animate-pulse opacity-0 group-hover:opacity-100" />
    </button>
  );
}
