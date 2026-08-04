import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Zap, Award } from 'lucide-react';
import { ASSETS } from '../data/mockData';
import unifor04Img from '../assets/images/Unifor04.png';
import unifor05Img from '../assets/images/Unifor05.png';
import unifor06Img from '../assets/images/Unifor06.png';

interface HeroProps {
  onScrollToBuilder: () => void;
  onOpenQuoteModal: () => void;
}

const carouselImages = [unifor04Img, unifor05Img, unifor06Img];

export const Hero: React.FC<HeroProps> = ({ onScrollToBuilder, onOpenQuoteModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative bg-[#18181B] text-white overflow-hidden py-12 lg:py-20" id="inicio">
      {/* Background Dark Overlay Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60 z-10"></div>
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <img
          src={ASSETS.hero}
          alt="Locker Room Background"
          className="w-full h-full object-cover object-center filter blur-[2px]"
          referrerPolicy="no-referrer"
          id="hero-bg-img"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Featured Influencer Photo Container (Matches Left side in Reference Design) */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center" id="hero-influencer-container">
            <div className="relative group max-w-md lg:max-w-none w-full">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-300 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl bg-neutral-900">
                <img
                  src={carouselImages[currentImageIndex]}
                  alt="Uniforme de futebol Gráfica Mainardi"
                  className="w-full h-[380px] sm:h-[480px] lg:h-[520px] object-cover object-top transition-all duration-700 transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  id="hero-influencer-main-img"
                />

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  {carouselImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? 'bg-amber-400 w-6' : 'bg-white/40 hover:bg-white/70 w-2'
                      }`}
                      aria-label={`Ir para imagem ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Secondary Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-amber-500 text-black font-black p-3.5 rounded-2xl shadow-xl flex items-center gap-2 transform rotate-2 hidden sm:flex">
                <Award className="w-5 h-5 text-black" />
                <span className="text-xs font-black uppercase">Padrão Profissional</span>
              </div>
            </div>
          </div>

          {/* Text Content (Matches Right side in Reference Design) */}
          <div className="lg:col-span-6 order-1 lg:order-2 text-center lg:text-left space-y-6" id="hero-text-container">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none uppercase" id="hero-title">
              VISTA SEU TIME <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5A823] via-yellow-400 to-amber-500">
                COM ORGULHO
              </span>
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg lg:text-xl font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed" id="hero-subtitle">
              Uniformes Esportivos 100% Personalizados com a Qualidade Superior da Gráfica Mainardi. 
              Sublimação Digital Total de alta definição, tecidos tecnológicos com Proteção UV 50+ e caimento anatômico perfeito.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" id="hero-cta-buttons">
              <button
                onClick={() => {
                  const element = document.getElementById('catalog-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto bg-[#E5A823] hover:bg-amber-400 text-neutral-950 font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer"
                id="hero-btn-solicitar-contato"
              >
                <span>Conheça nossos modelos</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 border-t border-neutral-800 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left" id="hero-highlights">
              <div>
                <span className="block text-amber-400 font-extrabold text-lg sm:text-2xl">UV 50+</span>
                <span className="text-neutral-400 text-xs sm:text-sm font-medium">Proteção Solar</span>
              </div>
              <div>
                <span className="block text-amber-400 font-extrabold text-lg sm:text-2xl">1440 DPI</span>
                <span className="text-neutral-400 text-xs sm:text-sm font-medium">Sublimação Digital</span>
              </div>
              <div>
                <span className="block text-amber-400 font-extrabold text-lg sm:text-2xl">100%</span>
                <span className="text-neutral-400 text-xs sm:text-sm font-medium">Personalizável</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
