import React from 'react';
import { Shirt, Trophy, Monitor, Printer } from 'lucide-react';
import fundoModelagem from '../assets/images/Fd_Modelagem.png';
import fundoPadraoCampeao from '../assets/images/Fd_Padrao_Campeao.png';
import fundoLayouts from '../assets/images/Fd_Layouts.png';
import fundoSublimacao from '../assets/images/Fd_Sublimacao.png';

interface CreationSectionProps {
  onSelectImage?: (src: string, title: string, caption: string) => void;
  onOpenKitBuilder?: () => void;
}

const features = [
  {
    id: 'feature-1',
    icon: Shirt,
    title: 'Modelagem Exclusiva',
    subtitle: 'Corte Raglan ou Tradicional',
    description: 'Modelagem ergonômica com ótimo caimento e acabamento reforçado no corpo.',
    image: fundoModelagem,
    tag: 'Corte Premium',
  },
  {
    id: 'feature-2',
    icon: Trophy,
    title: 'Padrão Campeão',
    subtitle: 'Alta Performance',
    description: 'Qualidade profissional testada e aprovada por times e influenciadores.',
    image: fundoPadraoCampeao,
    tag: 'Design Profissional',
  },
  {
    id: 'feature-3',
    icon: Monitor,
    title: 'Layouts Ilimitados',
    subtitle: '100% Customizável',
    description: 'Liberdade total para escudos, patrocinadores, números e combinação de cores.',
    image: fundoLayouts,
    tag: 'Arte Exclusiva',
  },
  {
    id: 'feature-4',
    icon: Printer,
    title: 'Sublimação Total',
    subtitle: 'Alta Definição',
    description: 'Impressão digital vibrante 720x1440 DPI em Dry-Fit que jamais desbota.',
    image: fundoSublimacao,
    tag: 'Tecnologia HD',
  },
];

export const CreationSection: React.FC<CreationSectionProps> = ({ onSelectImage }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 text-neutral-900 border-b border-neutral-200 relative overflow-hidden" id="criacao">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900" id="criacao-title">
            CRIAÇÃO <span className="text-amber-600">SEM LIMITES</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-medium text-neutral-600 max-w-2xl" id="criacao-subtitle">
            Todos os modelos disponíveis podem ser totalmente modificados conforme o seu projeto!
          </p>
          <div className="w-20 h-1.5 bg-[#E5A823] rounded-full mt-2"></div>
        </div>

        {/* 4 Feature Cards Grid with Uniform Previews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" id="criacao-features-grid">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-md flex flex-col"
              >
                {/* Image Background Showcase Header */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  {/* Image without white gradient overlay */}


                </div>

                {/* Card Content Footer */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
                  <div>
                    <h3 className="font-black text-neutral-900 text-lg flex items-center justify-between">
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-wide mt-0.5 mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

