import React, { useState } from 'react';
import { UNIFORM_MODELS } from '../data/mockData';
import { UniformModel } from '../types';
import { Sparkles, ArrowRight, Eye, ShieldCheck, Check } from 'lucide-react';

interface CatalogSectionProps {
  onSelectModel: (model: UniformModel) => void;
  onOpenKitBuilder: () => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({ onSelectModel, onOpenKitBuilder }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  return (
    <section className="py-16 bg-white text-neutral-900 border-b border-neutral-200" id="modelos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-neutral-900 tracking-tight" id="catalog-title">
              UNIFORMES <span className="text-amber-600">PERSONALIZADOS</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium text-neutral-600 max-w-xl mt-2" id="catalog-subtitle">
              Confira os layouts mais procurados para times de futebol de campo, futsal e society.
            </p>
            <div className="w-20 h-1.5 bg-[#E5A823] rounded-full mt-2"></div>
          </div>
        </div>

        {/* Catalog Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="catalog-grid">
          {UNIFORM_MODELS.map((model) => (
            <div
              key={model.id}
              className="bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image Box */}
                <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative p-3 flex items-center justify-center">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {model.badge && (
                    <span className="absolute top-3 left-3 bg-emerald-600 text-white font-black text-[10px] px-2.5 py-1 rounded-full uppercase shadow-md">
                      {model.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-extrabold text-neutral-900 text-lg leading-snug group-hover:text-amber-600 transition-colors">
                    {model.name}
                  </h3>
                  
                  <p className="text-xs text-neutral-600 font-medium line-clamp-3">
                    {model.description}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-neutral-200">
                    {model.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="text-xs text-neutral-700 font-bold flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={onOpenKitBuilder}
                  className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFB800] via-[#F59E0B] to-[#ED8936] hover:from-emerald-600 hover:via-emerald-600 hover:to-emerald-700 text-neutral-950 hover:text-white font-black uppercase text-xs tracking-wider px-4 py-3 rounded-2xl border-2 border-[#D97300] hover:border-emerald-600 shadow-[0_4px_14px_rgba(217,115,0,0.35)] hover:shadow-[0_6px_20px_rgba(5,150,105,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>SOLICITAR ORÇAMENTO</span>
                  <ArrowRight className="w-4 h-4 text-neutral-950 group-hover:text-white transition-colors duration-300" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
