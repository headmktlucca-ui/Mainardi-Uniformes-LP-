import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { ContactFormData } from '../types';
import influen01Img from '../assets/images/Influen01.png';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    teamName: '',
    quantity: 15,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const messageText = `*CONTATO VIA SITE - GRÁFICA MAINARDI*

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Time:* ${formData.teamName || 'Não informado'}
*Quantidade estimada:* ${formData.quantity} uniformes

*Mensagem:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/55${COMPANY_INFO.phone}?text=${encodeURIComponent(messageText)}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  return (
    <section className="py-16 bg-neutral-100 text-neutral-900" id="contato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900" id="contato-title">
            Entre em <span className="text-[#D96B00]">contato</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#E5A823] rounded-full mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xl space-y-6" id="contato-form-container">
            
            <div className="border-b border-neutral-100 pb-4">
              <span className="text-amber-600 text-xs font-black uppercase tracking-wider block">Atendimento Personalizado</span>
              <h3 className="text-2xl font-black text-neutral-900 uppercase">Solicitar Orçamento do Uniforme</h3>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="font-black text-emerald-900 text-xl">Mensagem Enviada com Sucesso!</h4>
                <p className="text-emerald-700 text-sm font-medium">
                  Você está sendo redirecionado para o nosso WhatsApp comercial com a Gráfica Mainardi.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-emerald-800 underline hover:text-emerald-950"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Nome Completo: *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome ou do responsável do time"
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 text-neutral-900 text-sm focus:border-amber-500 focus:bg-white focus:outline-none transition-all font-medium"
                    id="input-nome"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-neutral-700 block mb-1">
                      E-mail: *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seuemail@exemplo.com"
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 text-neutral-900 text-sm focus:border-amber-500 focus:bg-white focus:outline-none transition-all font-medium"
                      id="input-email"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-700 block mb-1">
                      Telefone / WhatsApp: *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(51) 99999-9999"
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 text-neutral-900 text-sm focus:border-amber-500 focus:bg-white focus:outline-none transition-all font-medium"
                      id="input-telefone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-neutral-700 block mb-1">
                      Nome do Time / Cidade:
                    </label>
                    <input
                      type="text"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      placeholder="Ex: São José FC - Sobradinho"
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 text-neutral-900 text-sm focus:border-amber-500 focus:bg-white focus:outline-none transition-all font-medium"
                      id="input-time"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-700 block mb-1">
                      Quantidade Estimada:
                    </label>
                    <input
                      type="number"
                      min="5"
                      max="500"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 15 })}
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 text-neutral-900 text-sm focus:border-amber-500 focus:bg-white focus:outline-none transition-all font-medium"
                      id="input-qtd"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Mensagem / Detalhes do Pedido:
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descreva as cores do seu time, se já possui escudo pronto ou se precisa de ajuda na criação..."
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 text-neutral-900 text-sm focus:border-amber-500 focus:bg-white focus:outline-none transition-all font-medium"
                    id="input-mensagem"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FFB800] via-[#F59E0B] to-[#ED8936] hover:from-emerald-600 hover:via-emerald-600 hover:to-emerald-700 text-neutral-950 hover:text-white font-black uppercase text-sm sm:text-base tracking-wider px-8 py-3.5 rounded-full border-2 border-[#D97300] hover:border-emerald-600 shadow-[0_4px_14px_rgba(217,115,0,0.35)] hover:shadow-[0_6px_20px_rgba(5,150,105,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  id="btn-enviar-contato"
                >
                  <span>SOLICITAR ORÇAMENTO</span>
                  <ArrowRight className="w-5 h-5 text-neutral-950 group-hover:text-white transition-colors duration-300" />
                </button>

              </form>
            )}

          </div>

          {/* Right Column: Image Influen01.png */}
          <div className="lg:col-span-6 flex justify-center items-center" id="contato-image-container">
            <img
              src={influen01Img}
              alt="Atendimento Gráfica Mainardi"
              className="w-full h-auto object-contain max-h-[600px] rounded-3xl"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
