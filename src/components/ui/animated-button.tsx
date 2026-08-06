import React from 'react';
import { ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface AnimatedButtonProps {
  onClick?: () => void;
  text?: string;
  className?: string;
  id?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  onClick,
  text = 'Solicitar Orçamento',
  className = '',
  id = 'btn-solicitar-orcamento',
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`relative inline-flex items-center justify-between gap-3 px-6 py-3 overflow-hidden font-black text-xs sm:text-sm tracking-wide transition-all bg-[#E5A823] rounded-lg shadow-md hover:shadow-emerald-600/30 group border border-amber-300/60 cursor-pointer active:scale-95 ${className}`}
    >
      <span className="absolute -inset-x-16 -inset-y-20 bg-emerald-600 rotate-[-15deg] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out origin-left pointer-events-none" />
      <span className="relative z-10 w-full text-left text-neutral-950 font-black transition-colors duration-300 ease-in-out group-hover:text-white uppercase tracking-wider flex items-center gap-2">
        <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
        <span>{text}</span>
      </span>
      <span className="relative z-10 w-6 h-6 rounded-md bg-neutral-950/10 flex items-center justify-center text-neutral-950 group-hover:bg-white group-hover:text-emerald-700 transition-all duration-300 transform group-hover:translate-x-0.5 shrink-0">
        <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </button>
  );
};

export default AnimatedButton;
