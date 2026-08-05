import React from 'react';
import { ArrowRight, Hexagon } from 'lucide-react';
import fundoCapaImg from '../assets/images/Fundo Capa.png';

interface HeroProps {
  onScrollToBuilder: () => void;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative bg-[#18181B] text-white overflow-hidden w-full min-h-[500px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[680px] flex items-center" id="inicio">
      {/* Background Image & Soft Left-to-Right Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={fundoCapaImg}
          alt="Uniformes Esportivos Gráfica Mainardi"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          id="hero-bg-img"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Main Content Area - 100% Full Width */}
      <div className="relative z-20 w-full px-4 sm:px-8 lg:px-12 py-10 lg:py-16" id="hero-text-container">
        <div className="max-w-lg space-y-5 text-left">
          
          {/* Top Badge: Hexagon Logo Badge + Qualidade que Veste Campeões */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center text-[#E5A823] shrink-0">
              <Hexagon className="w-10 h-10 stroke-[#E5A823] stroke-[2.5] fill-black/30" />
              <span className="absolute font-black text-xs text-[#E5A823]">M</span>
            </div>
            <div className="text-left leading-tight uppercase font-black tracking-wide">
              <span className="block text-[11px] sm:text-xs text-neutral-200">
                QUALIDADE QUE
              </span>
              <span className="block text-[13px] sm:text-sm text-white">
                VESTE CAMPEÕES
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-none" id="hero-title-line1">
              VISTA SEU TIME COM
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#E5A823] uppercase leading-none" id="hero-title-line2">
              ORGULHO
            </h1>
          </div>

          {/* Subtitle Description */}
          <p className="text-neutral-100 text-sm sm:text-base font-normal max-w-md leading-snug drop-shadow" id="hero-subtitle">
            Uniformes Esportivos 100% Personalizados com a Qualidade Superior da Gráfica Mainardi. 
            Sublimação Digital Total de alta definição, tecidos tecnológicos com Proteção UV 50+ e caimento anatômico perfeito.
          </p>

          {/* CTA Button */}
          <div className="pt-3" id="hero-cta-buttons">
            <button
              onClick={() => {
                const element = document.getElementById('catalog-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[#E5A823] hover:bg-amber-400 text-neutral-950 font-black text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-2xl hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 uppercase tracking-wider flex items-center gap-2.5 cursor-pointer"
              id="hero-btn-solicitar-contato"
            >
              <span>CONHEÇA NOSSOS MODELOS</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};


