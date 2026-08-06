import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = "Olá! Gostaria de solicitar um orçamento para uniformes personalizados.";
  const whatsappUrl = `https://wa.me/55${COMPANY_INFO.phone}?text=${encodeURIComponent(defaultMessage)}`;

  const handleOpenWhatsApp = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto" id="whatsapp-widget-container">
      
      {/* Popover Card */}
      {isOpen && (
        <div 
          className="mb-3 w-80 sm:w-88 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300"
          id="whatsapp-widget-popover"
        >
          {/* Popover Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-black text-white text-lg">
                  GM
                </div>
                {/* Online Indicator */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-700 rounded-full animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight text-white">{COMPANY_INFO.name}</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                  Atendimento Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Popover Body */}
          <div className="p-4 bg-neutral-950 space-y-3">
            <div className="bg-neutral-900 border border-neutral-800/80 rounded-xl p-3.5 text-neutral-300 text-xs sm:text-sm leading-relaxed space-y-2">
              <p className="font-semibold text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#E5A823]" />
                Olá! Como podemos ajudar seu time?
              </p>
              <p className="text-neutral-400">
                Fale diretamente com nossa equipe para tirar dúvidas sobre modelos, valores e prazos de entrega.
              </p>
            </div>

            {/* Quick action button */}
            <button
              onClick={handleOpenWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-neutral-950 font-black text-sm py-3 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Send className="w-4 h-4 fill-neutral-950 group-hover:translate-x-0.5 transition-transform" />
              <span>Iniciar Conversa no WhatsApp</span>
            </button>
          </div>
          
          {/* Popover Footer */}
          <div className="px-4 py-2.5 bg-neutral-900/60 border-t border-neutral-800/60 text-center">
            <span className="text-[10px] text-neutral-500 font-medium">
              Atendimento de {COMPANY_INFO.workingHours}
            </span>
          </div>
        </div>
      )}

      {/* Floating Action Button - Official High-Res WhatsApp Icon */}
      <div className="relative group">
        {/* Pulsing ring background */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-ping pointer-events-none" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer border-2 border-white/30"
          id="btn-whatsapp-flutuante"
          aria-label="Abrir WhatsApp"
          title="Falar no WhatsApp"
        >
          {/* Official WhatsApp White SVG Icon */}
          <svg className="w-8 h-8 sm:w-9 sm:h-9 fill-white drop-shadow-md shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>

          {/* Unread dot notification badge */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-[#E5A823] border-2 border-neutral-950 rounded-full flex items-center justify-center shadow-md">
            <span className="w-2 h-2 bg-neutral-950 rounded-full" />
          </span>
        </button>
      </div>

    </div>
  );
};
