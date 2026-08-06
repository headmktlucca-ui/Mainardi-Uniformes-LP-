import React from 'react';
import timeIgualImg from '../assets/images/Time Igual.png';
import WhatsAppIcon from './ui/WhatsAppIcon';

interface TeamIdentitySectionProps {
  onOpenQuote: () => void;
}

export const TeamIdentitySection: React.FC<TeamIdentitySectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-16 bg-white text-neutral-900 border-b border-neutral-200" id="identidade-time">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
              Uniformes Completos com a <span className="text-amber-600">identidade do seu time</span>.
            </h2>

            <div className="w-20 h-1.5 bg-[#E5A823] rounded-full"></div>

            <p className="text-base sm:text-lg text-neutral-600 font-medium leading-relaxed max-w-xl">
              Faça o uniforme perfeito que reflita a personalidade e estilo da sua equipe. Uniformes esportivos fabricados com os melhores tecidos e materiais do mercado.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FFB800] via-[#F59E0B] to-[#ED8936] hover:from-[#FFAE00] hover:to-[#D97706] text-black font-black uppercase text-sm sm:text-base tracking-wider px-8 py-3.5 rounded-2xl border-2 border-[#D97300] shadow-[0_4px_14px_rgba(217,115,0,0.35)] hover:shadow-[0_6px_20px_rgba(217,115,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                id="btn-time-solicitar-orcamento"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-black shrink-0" />
                <span>SOLICITAR ORÇAMENTO</span>
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center items-center">
            <img
              src={timeIgualImg}
              alt="Uniformes Completos com a identidade do seu time"
              className="w-full h-auto object-contain max-h-[500px] rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
