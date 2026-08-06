import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/mockData';
import ShinyButton from './ui/shiny-button';

interface HeaderProps {
  onOpenKitBuilder: () => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenKitBuilder, onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all border-none" id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-none m-0">
        <div className="flex items-center justify-between h-20 sm:h-24 border-none m-0 py-2">
          
          {/* Logo Mainardi Gráfica */}
          <a href="#inicio" onClick={() => scrollToSection('inicio')} className="flex items-center gap-3 group focus:outline-none" id="header-logo-link">
            <div className="relative overflow-hidden transition-transform group-hover:scale-105">
              <img
                src={ASSETS.logo}
                alt="Gráfica Mainardi Logo"
                className="h-[60px] sm:h-[78px] w-auto object-contain border-none m-0 p-0"
                referrerPolicy="no-referrer"
                id="header-logo-img"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-neutral-800 font-semibold text-base" id="desktop-nav">
            <button
              onClick={() => scrollToSection('inicio')}
              className="hover:text-amber-600 transition-colors py-2 relative group focus:outline-none"
              id="nav-inicio"
            >
              Início
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('criacao')}
              className="hover:text-amber-600 transition-colors py-2 relative group focus:outline-none"
              id="nav-criacao"
            >
              Criação
            </button>
            <button
              onClick={() => scrollToSection('descricao')}
              className="hover:text-amber-600 transition-colors py-2 relative group focus:outline-none"
              id="nav-modelos"
            >
              Modelos
            </button>
            <button
              onClick={() => scrollToSection('tecnologia')}
              className="hover:text-amber-600 transition-colors py-2 relative group focus:outline-none"
              id="nav-tecnologia"
            >
              Tecnologia
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="hover:text-amber-600 transition-colors py-2 relative group focus:outline-none"
              id="nav-contato"
            >
              Contato
            </button>
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center space-x-4" id="header-actions">
            <ShinyButton
              onClick={onOpenQuoteModal}
              id="btn-solicitar-orcamento"
            >
              Solicitar Orçamento
            </ShinyButton>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2" id="mobile-menu-wrapper">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#E5A823] hover:bg-emerald-600 text-neutral-950 hover:text-white font-black text-xs px-4 py-2.5 rounded-lg shadow-md hover:shadow-emerald-600/30 transition-all tracking-wide flex items-center gap-1.5 cursor-pointer"
              id="mobile-quick-quote-btn"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-neutral-700 hover:text-amber-600 hover:bg-neutral-100 focus:outline-none"
              aria-label="Abrir Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-6 space-y-3 shadow-xl animate-fadeIn" id="mobile-dropdown">
          <button
            onClick={() => scrollToSection('inicio')}
            className="block w-full text-left px-3 py-2 text-base font-semibold text-neutral-800 hover:bg-amber-50 hover:text-amber-600 rounded-md"
            id="mobile-nav-inicio"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection('criacao')}
            className="block w-full text-left px-3 py-2 text-base font-semibold text-neutral-800 hover:bg-amber-50 hover:text-amber-600 rounded-md"
            id="mobile-nav-criacao"
          >
            Criação
          </button>
          <button
            onClick={() => scrollToSection('descricao')}
            className="block w-full text-left px-3 py-2 text-base font-semibold text-neutral-800 hover:bg-amber-50 hover:text-amber-600 rounded-md"
            id="mobile-nav-modelos"
          >
            Modelos & Descrição
          </button>
          <button
            onClick={() => scrollToSection('tecnologia')}
            className="block w-full text-left px-3 py-2 text-base font-semibold text-neutral-800 hover:bg-amber-50 hover:text-amber-600 rounded-md"
            id="mobile-nav-tecnologia"
          >
            Tecnologia (Estampa & Costura)
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="block w-full text-left px-3 py-2 text-base font-semibold text-neutral-800 hover:bg-amber-50 hover:text-amber-600 rounded-md"
            id="mobile-nav-contato"
          >
            Entre em Contato
          </button>
          <div className="pt-2">
            <ShinyButton
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              id="mobile-drawer-btn-orcamento"
              className="w-full"
            >
              Solicitar Orçamento Agora
            </ShinyButton>
          </div>
        </div>
      )}
    </header>
  );
};
