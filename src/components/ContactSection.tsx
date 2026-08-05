import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { ContactFormData } from '../types';

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
            Entre em contato
          </h2>
          <div className="w-20 h-1.5 bg-[#E5A823] rounded-full mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details & Map (Matching reference design layout) */}
          <div className="lg:col-span-6 space-y-6" id="contato-info-container">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-lg space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-neutral-900 text-sm uppercase tracking-wider">Endereço:</h4>
                  <p className="text-neutral-700 font-bold text-sm sm:text-base">
                    {COMPANY_INFO.address}
                  </p>
                  <p className="text-neutral-600 text-sm">
                    {COMPANY_INFO.zip} / {COMPANY_INFO.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-neutral-100 pt-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-neutral-900 text-sm uppercase tracking-wider">Telefone / WhatsApp:</h4>
                  <a
                    href={`https://wa.me/55${COMPANY_INFO.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:text-amber-800 font-extrabold text-lg block hover:underline"
                  >
                    {COMPANY_INFO.phoneFormatted}
                  </a>
                  <p className="text-neutral-500 text-xs">Atendimento rápido pelo WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-neutral-100 pt-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-neutral-900 text-sm uppercase tracking-wider">E-mail:</h4>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-neutral-800 hover:text-amber-700 font-bold text-sm sm:text-base hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-neutral-100 pt-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-neutral-900 text-sm uppercase tracking-wider">Horário de Atendimento:</h4>
                  <p className="text-neutral-700 text-sm font-medium">
                    {COMPANY_INFO.workingHours}
                  </p>
                </div>
              </div>

            </div>

            {/* Map Preview Container */}
            <div className="bg-white rounded-3xl p-3 border border-neutral-200 shadow-md overflow-hidden relative" id="map-container">
              <div className="aspect-[16/7] rounded-2xl overflow-hidden relative bg-neutral-200">
                <iframe
                  title="Gráfica Mainardi Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.847192384!2d-53.030587!3d-29.423012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjknMjUnMjIuOCJTIDUzwrAwMSc1MC4xIlc!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="filter grayscale contrast-125 opacity-90"
                ></iframe>

                <div className="absolute top-3 left-3 bg-neutral-950/90 text-white p-2.5 rounded-xl border border-amber-500/30 flex items-center gap-2 text-xs font-extrabold shadow-lg">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Sobradinho - RS</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (Matching reference design input layout) */}
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

                {/* Submit button (Matching reference design style) */}
                <button
                  type="submit"
                  className="w-full bg-[#E5A823] hover:bg-amber-400 text-neutral-950 font-black text-xs sm:text-sm py-4 rounded-full shadow-2xl hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 uppercase tracking-wider cursor-pointer"
                  id="btn-enviar-contato"
                >
                  <span>ENVIAR SOLICITAÇÃO DE ORÇAMENTO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
