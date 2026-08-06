import React from 'react';
import { ASSETS, COMPANY_INFO } from '../data/mockData';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#18181B] text-white border-t border-neutral-800 pt-12 pb-8" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={ASSETS.logo}
                alt="Gráfica Mainardi Logo"
                className="h-12 w-auto object-contain border-none p-0 m-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="font-black text-xl text-white tracking-wide uppercase">{COMPANY_INFO.name}</h3>
                <p className="text-xs text-amber-400 font-bold uppercase">{COMPANY_INFO.subtitle}</p>
              </div>
            </div>

            <p className="text-neutral-400 text-sm max-w-md leading-relaxed font-medium">
              Especialista em confecção de uniformes esportivos personalizados de alta performance com impressão sublimática digital em até 1440 DPI e proteção UV 50+.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-amber-400 font-extrabold text-xs uppercase tracking-wider">Navegação Rápida</h4>
            <ul className="space-y-2 text-sm text-neutral-300 font-medium">
              <li><a href="#criacao" className="hover:text-amber-400 transition-colors">Características</a></li>
              <li><a href="#modelos" className="hover:text-amber-400 transition-colors">Personalizados</a></li>
              <li><a href="#contato" className="hover:text-amber-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Summary */}
          <div className="space-y-3">
            <h4 className="text-amber-400 font-extrabold text-xs uppercase tracking-wider">Atendimento Comercial</h4>
            <div className="space-y-2 text-xs text-neutral-300 font-medium">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.address} - {COMPANY_INFO.city}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`https://wa.me/55${COMPANY_INFO.phone}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-white font-bold">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Social & Copyright Bar (Matching mockup bottom bar) */}
        <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          
          <div>
            <p>© {new Date().getFullYear()} Gráfica Mainardi • Sobradinho - RS</p>
          </div>

          <div className="flex items-center space-x-6 text-neutral-400">
            <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              Facebook
            </a>
            <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              Instagram
            </a>
            <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              X (Twitter)
            </a>
            <a href={COMPANY_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              YouTube
            </a>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="bg-neutral-800 hover:bg-amber-500 hover:text-black text-white p-2.5 rounded-full transition-all border border-neutral-700 flex items-center gap-1 font-bold"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
