import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../../config/business.config';

export const CtaBannerSection: React.FC = () => {
  return (
    <section className="py-16 bg-linear-to-r from-rose-600 via-pink-600 to-purple-600 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          Procurando o presente ou item especial ideal em Chapadinha?
        </h2>
        <p className="text-rose-100 text-base max-w-2xl mx-auto">
          Fale diretamente com nossa equipe, consulte novidades em estoque ou solicite a personalização do seu produto!
        </p>
        <div>
          <a
            href={createWhatsAppUrl("Olá! Vim pelo site da Astro Mixmax e gostaria de consultar produtos disponíveis.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-slate-900 hover:bg-rose-50 font-extrabold text-base shadow-2xl transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 text-emerald-500 fill-emerald-500" />
            <span>Iniciar Atendimento no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};