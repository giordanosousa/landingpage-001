import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../../config/business.config';

export const FloatingWhatsapp: React.FC = () => {
  return (
    <a
      href={createWhatsAppUrl("Olá! Gostaria de tirar uma dúvida com a Astro Mixmax.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40 transition-all hover:scale-110 active:scale-95 flex items-center justify-center group"
    >
      <MessageCircle className="w-7 h-7 fill-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold text-xs">
        Atendimento WhatsApp
      </span>
    </a>
  );
};