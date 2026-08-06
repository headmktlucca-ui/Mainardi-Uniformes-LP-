import React from 'react';
import fluxoImg from '../assets/images/Fluxo.png';

export const FlowSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white text-neutral-900" id="fluxo-processo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <img
          src={fluxoImg}
          alt="Fluxo de Pedido e Produção"
          className="max-w-full h-auto object-contain rounded-2xl"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};
