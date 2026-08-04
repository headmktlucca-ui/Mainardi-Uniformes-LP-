import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [teamName, setTeamName] = useState('');
  const [quantity, setQuantity] = useState(15);
  const [phone, setPhone] = useState('');
  const [includeShorts, setIncludeShorts] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*SOLICITAÇÃO RÁPIDA DE ORÇAMENTO DE UNIFORME*

*Time/Cliente:* ${teamName || 'Não informado'}
*Telefone/WhatsApp:* ${phone}
*Quantidade de Kits:* ${quantity} uniformes
*Itens:* Camiseta Raglan UV50+ ${includeShorts ? '+ Calção Dry Ultra' : ''}

Gostaria de ver os modelos e valores para fechamento!`;

    const url = `https://wa.me/55${COMPANY_INFO.phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-lg w-full bg-neutral-900 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Gráfica Mainardi • Sobradinho - RS
          </div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">
            Solicitar Orçamento de Uniforme
          </h3>
          <p className="text-neutral-300 text-xs sm:text-sm font-medium">
            Preencha abaixo para receber a cotação imediata com descontos por quantidade via WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="text-xs font-bold text-neutral-300 block mb-1">
              Seu Nome / Nome do Time:
            </label>
            <input
              type="text"
              required
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Ex: Carlos - Grêmio Sobradinho"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm font-medium focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-neutral-300 block mb-1">
              WhatsApp com DDD: *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(51) 99999-9999"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm font-medium focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-neutral-300 block mb-1">
                Quantidade de Kits:
              </label>
              <input
                type="number"
                min="5"
                max="500"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 15)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm font-medium focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-col justify-end">
              <label className="flex items-center gap-2 cursor-pointer bg-neutral-950 p-3 rounded-xl border border-neutral-800 text-xs font-bold">
                <input
                  type="checkbox"
                  checked={includeShorts}
                  onChange={(e) => setIncludeShorts(e.target.checked)}
                  className="accent-amber-500 w-4 h-4 rounded"
                />
                <span>Incluir Calção</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base py-4 rounded-full shadow-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer mt-2"
          >
            <Send className="w-5 h-5 fill-white" />
            <span>Falar no WhatsApp Agora</span>
          </button>

          <p className="text-[11px] text-neutral-400 text-center font-medium">
            🔒 Atendimento direto pelo WhatsApp Comercial da Gráfica Mainardi.
          </p>

        </form>

      </div>
    </div>
  );
};
