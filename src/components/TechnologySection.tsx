import React from 'react';
import { Printer, Scissors, Check, ShieldCheck } from 'lucide-react';
import { ASSETS } from '../data/mockData';

interface TechnologySectionProps {
  onSelectImage: (src: string, title: string, caption: string) => void;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ onSelectImage }) => {
  return (
    <section className="py-16 bg-white text-neutral-900 border-b border-neutral-200" id="tecnologia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: ESTAMPA (Sublimation Technology) */}
          <div className="bg-neutral-50 rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group" id="card-estampa">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-neutral-950 flex items-center justify-center font-black">
                    <Printer className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-neutral-900 tracking-tight" id="estampa-title">
                    ESTAMPA
                  </h3>
                </div>
                <span className="bg-amber-100 text-amber-800 font-extrabold text-xs px-3 py-1 rounded-full uppercase">
                  720 x 1440 DPI
                </span>
              </div>

              <p className="text-neutral-700 font-medium text-base leading-relaxed" id="estampa-text">
                Buscamos sempre garantir a melhor qualidade da resolução das imagens das nossas peças. 
                Nossos maquinários de última geração garantem uma resolução em até <strong>720 x 1440 dpi</strong>, 
                o que resulta em uma peça com cores vivas, nitidez nos mínimos detalhes e deslumbrantes escudos e patrocinadores.
              </p>
            </div>

            {/* Print Showcase Image */}
            <div
              onClick={() => onSelectImage(ASSETS.influencerMulti, 'Impressão Digital Sublimática 1440 DPI', 'Cores vibrantes que penetram nas fibras do tecido e não desbotam nem trincam com as lavagens.')}
              className="mt-6 rounded-2xl overflow-hidden border border-neutral-200 aspect-[16/9] relative cursor-pointer group-hover:border-amber-400 transition-colors"
            >
              <img
                src={ASSETS.influencerMulti}
                alt="Impressão Sublimática de Alta Resolução"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 text-white text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                Cores vivas que não desbotam jamais
              </div>
            </div>
          </div>

          {/* Card 2: CONFECÇÃO (Reinforced Sewing) */}
          <div className="bg-neutral-50 rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group" id="card-confeccao">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-neutral-950 flex items-center justify-center font-black">
                    <Scissors className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-neutral-900 tracking-tight" id="confeccao-title">
                    CONFECÇÃO
                  </h3>
                </div>
                <span className="bg-emerald-100 text-emerald-800 font-extrabold text-xs px-3 py-1 rounded-full uppercase flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Ponto Duplo
                </span>
              </div>

              <p className="text-neutral-700 font-medium text-base leading-relaxed" id="confeccao-text">
                Nossas peças são confeccionadas com costura de ponto duplo e reforço estrutural, 
                garantindo assim uma durabilidade muito superior nas costuras de nossos produtos, resistindo aos trancos, 
                puxões e exigências das partidas de futebol mais intensas.
              </p>
            </div>

            {/* Sewing Close-up Image */}
            <div
              onClick={() => onSelectImage(ASSETS.stitching, 'Costura de Ponto Duplo Reforçada', 'Acabamento profissional que garante durabilidade extrema mesmo sob forte tensão no jogo.')}
              className="mt-6 rounded-2xl overflow-hidden border border-neutral-200 aspect-[16/9] relative cursor-pointer group-hover:border-amber-400 transition-colors"
            >
              <img
                src={ASSETS.stitching}
                alt="Costura de Ponto Duplo Reforçado Gráfica Mainardi"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 text-white text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                Reinforced sewing • Ponto Duplo de Alta Resistência
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
