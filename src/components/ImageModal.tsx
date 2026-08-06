import React from 'react';
import { X, Sparkles, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  caption: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  caption
}) => {
  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const text = `Olá! Vi o modelo/uniforme "${title}" na landing page e gostaria de solicitar um orçamento para o meu time.`;
    window.open(`https://wa.me/55${COMPANY_INFO.phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-5xl w-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl text-white flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-800">
          <div>
            <span className="text-amber-400 text-xs font-black uppercase tracking-wider block">Visualização Detalhada</span>
            <h3 className="text-lg sm:text-2xl font-black text-white">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image Container */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/50">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[60vh] w-auto object-contain rounded-xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Footer info & CTA */}
        <div className="p-4 sm:p-6 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-300 text-xs sm:text-sm max-w-xl font-medium">
            {caption}
          </p>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto bg-[#E5A823] hover:bg-emerald-600 text-neutral-950 hover:text-white font-black text-xs sm:text-sm px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 tracking-wide shrink-0 cursor-pointer"
          >
            <Send className="w-4 h-4 fill-current" />
            <span>Quero Este Modelo no WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
