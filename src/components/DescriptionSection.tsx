import React, { useState } from 'react';
import { Sun, Shield, Users, CheckCircle2, RotateCw, ZoomIn, Sparkles } from 'lucide-react';
import { ASSETS, UNIFORM_MODELS } from '../data/mockData';

interface DescriptionSectionProps {
  onSelectImage: (src: string, title: string, caption: string) => void;
  onOpenKitBuilder: () => void;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({ onSelectImage, onOpenKitBuilder }) => {
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);
  const selectedModel = UNIFORM_MODELS[selectedModelIndex];

  return (
    <section className="py-16 bg-neutral-50 text-neutral-900 border-b border-neutral-200" id="descricao">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900" id="descricao-title">
            DESCRIÇÃO
          </h2>
          <div className="w-20 h-1.5 bg-[#E5A823] rounded-full mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Specifications (Matching Reference Design) */}
          <div className="lg:col-span-6 space-y-8" id="descricao-specs-container">
            
            <div className="space-y-6">
              
              {/* Camiseta Specs */}
              <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-extrabold text-neutral-900 mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#E5A823] rounded-full"></span>
                  Camiseta Futebol Raglan:
                </h3>
                <ul className="space-y-2.5 text-neutral-700 font-medium text-sm sm:text-base">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Tecido Jim Dry:</strong> com alta respirabilidade e proteção UV 50+</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Escudo Sublimado:</strong> em alta definição diretamente no tecido</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Patrocinadores Ilimitados:</strong> adicione quantos logos desejar sem custo adicional</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Gola Especial:</strong> Acabamento anatômico em Gola Careca ou Gola V</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Modelagem Confortável:</strong> caimento esportivo para máxima mobilidade</span>
                  </li>
                </ul>
              </div>

              {/* Calção Specs */}
              <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-extrabold text-neutral-900 mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#E5A823] rounded-full"></span>
                  Calção / Shorts Esportivo:
                </h3>
                <ul className="space-y-2.5 text-neutral-700 font-medium text-sm sm:text-base">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Tecido Dry Ultra:</strong> leveza e secagem ultrarrápida no campo</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Escudo Sublimado:</strong> escudo do time aplicado com cores vivas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Sem Emenda Lateral:</strong> estrutura contínua para evitar atritos e assaduras</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* 3 Icon Badges (Proteção UV, Sublimação, Patrocinadores) */}
            <div className="grid grid-cols-3 gap-4 pt-2" id="descricao-badges">
              
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center mb-2">
                  <Sun className="w-6 h-6" />
                </div>
                <span className="font-extrabold text-neutral-900 text-xs sm:text-sm">Proteção UV 50+</span>
                <span className="text-[11px] text-neutral-600 font-medium">Bloqueio solar</span>
              </div>

              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="font-extrabold text-neutral-900 text-xs sm:text-sm">Sublimação Total</span>
                <span className="text-[11px] text-neutral-600 font-medium">Fidelidade de cor</span>
              </div>

              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center mb-2">
                  <Users className="w-6 h-6" />
                </div>
                <span className="font-extrabold text-neutral-900 text-xs sm:text-sm">Patrocinadores</span>
                <span className="text-[11px] text-neutral-600 font-medium">Sem limite de logos</span>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Kit Showcase & Fabric Detail (Matching Reference Layout) */}
          <div className="lg:col-span-6 space-y-6" id="descricao-kit-showcase">
            
            {/* Top Row: Fabric Texture Close-up + Model Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Fabric Texture Detail Box */}
              <div
                onClick={() => onSelectImage(ASSETS.fabricUv, 'Tecido Jim Dry UV 50+', 'Malha colmeia respirável com proteção solar UV 50+ e rápida evaporação do suor.')}
                className="bg-white rounded-2xl p-3 border border-neutral-200 shadow-sm hover:border-amber-400 cursor-pointer group relative overflow-hidden"
                id="fabric-texture-box"
              >
                <div className="aspect-square rounded-xl overflow-hidden relative bg-neutral-100">
                  <img
                    src={ASSETS.fabricUv}
                    alt="Tecido Jim Dry UV 50+ textura"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-2 left-2 bg-neutral-900/90 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                    <ZoomIn className="w-3 h-3 text-amber-400" /> Ver Textura
                  </div>
                </div>
                <p className="text-center font-bold text-xs mt-2 text-neutral-800">
                  Tecido Jim Dry UV50+
                </p>
              </div>

              {/* Model Switcher Buttons */}
              <div className="sm:col-span-2 bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">Selecione o Modelo</span>
                  <h4 className="font-extrabold text-neutral-900 text-base">{selectedModel.name}</h4>
                </div>

                {/* Thumbnails to pick kit model */}
                <div className="grid grid-cols-4 gap-2 mt-3">
                  {UNIFORM_MODELS.map((model, idx) => (
                    <button
                      key={model.id}
                      onClick={() => setSelectedModelIndex(idx)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all p-0.5 ${
                        selectedModelIndex === idx ? 'border-amber-500 ring-2 ring-amber-400/50 scale-105' : 'border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-full object-cover rounded"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Main Featured 3D Kit Mockup Display */}
            <div className="bg-white rounded-3xl p-6 border-2 border-neutral-200 shadow-xl relative overflow-hidden group">
              
              <div className="flex items-center justify-between mb-4">
                <span className="bg-amber-500 text-neutral-950 font-black text-xs px-3 py-1 rounded-full uppercase">
                  {selectedModel.badge || 'Kit Completo'}
                </span>

                <button
                  onClick={() => onSelectImage(selectedModel.image, selectedModel.name, selectedModel.description)}
                  className="text-neutral-500 hover:text-amber-600 font-bold text-xs flex items-center gap-1"
                >
                  <ZoomIn className="w-4 h-4" /> Ver em Alta Resolução
                </button>
              </div>

              {/* Large Image View */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 relative p-2 flex items-center justify-center">
                <img
                  src={selectedModel.image}
                  alt={selectedModel.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                  id="selected-model-large-img"
                />
              </div>

              {/* Model Description & Colors */}
              <div className="mt-4 pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-neutral-600 font-medium max-w-sm">
                    {selectedModel.description}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
