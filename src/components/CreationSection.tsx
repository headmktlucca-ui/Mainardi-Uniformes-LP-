import React from 'react';
import { Shirt, Trophy, Monitor, Printer } from 'lucide-react';

interface CreationSectionProps {
  onSelectImage: (src: string, title: string, caption: string) => void;
  onOpenKitBuilder: () => void;
}

export const CreationSection: React.FC<CreationSectionProps> = () => {
  return (
    <section className="py-16 bg-white text-neutral-900 border-b border-neutral-200" id="criacao">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900" id="criacao-title">
            CRIAÇÃO
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-medium text-neutral-600 max-w-2xl mx-auto" id="criacao-subtitle">
            Todos os modelos disponíveis podem ser modificados conforme você desejar!!
          </p>
          <div className="w-20 h-1.5 bg-[#E5A823] mx-auto rounded-full mt-2"></div>
        </div>

        {/* 4 Feature Process Icons (Matching reference layout) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8" id="criacao-features-grid">
          
          <div className="flex flex-col items-center text-center p-6 bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-[#E5A823] group-hover:bg-[#E5A823] group-hover:text-neutral-950 transition-colors mb-4">
              <Shirt className="w-8 h-8" />
            </div>
            <h3 className="font-extrabold text-neutral-900 text-lg mb-1">Modelagem Exclusiva</h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium">Corte Raglan ou Tradicional com ótimo caimento no corpo.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-[#E5A823] group-hover:bg-[#E5A823] group-hover:text-neutral-950 transition-colors mb-4">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="font-extrabold text-neutral-900 text-lg mb-1">Padrão Campeão</h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium">Qualidade profissional aprovada por times e influenciadores.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-[#E5A823] group-hover:bg-[#E5A823] group-hover:text-neutral-950 transition-colors mb-4">
              <Monitor className="w-8 h-8" />
            </div>
            <h3 className="font-extrabold text-neutral-900 text-lg mb-1">Layouts Ilimitados</h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium">Cores, patrocínios, escudos e nomes totalmente livres.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-[#E5A823] group-hover:bg-[#E5A823] group-hover:text-neutral-950 transition-colors mb-4">
              <Printer className="w-8 h-8" />
            </div>
            <h3 className="font-extrabold text-neutral-900 text-lg mb-1">Sublimação Total</h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium">Impressão digital 720x1440 DPI que jamais desbota.</p>
          </div>

        </div>

      </div>
    </section>
  );
};
