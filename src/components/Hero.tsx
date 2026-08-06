import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import fundoCapa01 from '../assets/images/Fundo Capa 01.png';
import fundoCapa02 from '../assets/images/Fundo Capa02.png';
import fundoCapa03 from '../assets/images/Fundo Capa03.png';
import fundoCapa04 from '../assets/images/Fundo Capa04.png';
import fundoCapa05 from '../assets/images/Fundo Capa05.jpeg';
import medalhaImg from '../assets/images/medalha.png';
import ShinyButton from './ui/shiny-button';

interface HeroProps {
  onScrollToBuilder: () => void;
  onOpenQuoteModal: () => void;
}

const carouselImages = [fundoCapa01, fundoCapa02, fundoCapa03, fundoCapa04, fundoCapa05];

export const Hero: React.FC<HeroProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#18181B] text-white overflow-hidden w-full min-h-[500px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[680px] flex items-center" id="inicio">
      {/* Background Image Carousel & Soft Left-to-Right Overlay */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`Uniformes Esportivos Gráfica Mainardi - ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            referrerPolicy="no-referrer"
            id={idx === 0 ? "hero-bg-img" : `hero-bg-img-${idx}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10 sm:from-black/85 sm:via-black/50 sm:to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Main Content Area - 100% Full Width */}
      <div className="relative z-20 w-full px-4 sm:px-8 lg:px-12 py-10 lg:py-16" id="hero-text-container">
        <div className="max-w-2xl space-y-5 text-left">
          
          {/* Top Badge: Medalha Image + Qualidade que Veste Campeões */}
          <div className="flex items-center gap-5 sm:gap-6">
            <img
              src={medalhaImg}
              alt="Medalha"
              className="h-24 sm:h-28 w-auto object-contain shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="text-left leading-snug uppercase font-black tracking-wide">
              <span className="block text-xl sm:text-2xl text-neutral-200">
                QUALIDADE QUE
              </span>
              <span className="block text-2xl sm:text-3xl text-white">
                VESTE CAMPEÕES
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white uppercase leading-none whitespace-nowrap" id="hero-title-line1">
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
            <ShinyButton
              onClick={() => {
                const element = document.getElementById('catalog-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              id="hero-btn-solicitar-contato"
              showIcon={false}
            >
              Conheça Nossos Modelos
            </ShinyButton>
          </div>

        </div>
      </div>
    </section>
  );
};


