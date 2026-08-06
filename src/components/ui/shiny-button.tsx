import React, { ReactNode } from "react";

interface ShinyButtonProps {
  children: ReactNode;
  onClick?: () => void;
  id?: string;
  className?: string;
}

export function ShinyButton({ children, onClick, id, className = "" }: ShinyButtonProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`group bg-gradient-to-r from-amber-400 via-[#E5A823] to-amber-600 hover:from-emerald-400 hover:via-emerald-500 hover:to-emerald-700 p-1 font-black rounded-xl overflow-hidden active:translate-y-0.5 active:scale-[0.99] transition-all duration-300 cursor-pointer shadow-md hover:shadow-emerald-600/30 ${className}`}
    >
      <div className="px-5 py-2.5 bg-gradient-to-r from-[#E5A823] to-amber-500 group-hover:from-emerald-600 group-hover:to-emerald-700 rounded-lg active:shadow-[inset_0px_0px_4px_0px_rgba(0,0,0,0.2)] flex items-center justify-center gap-2 text-neutral-950 group-hover:text-white font-black text-xs sm:text-sm tracking-wider uppercase transition-colors duration-300">
        {children}
      </div>
    </button>
  );
}

export default ShinyButton;
