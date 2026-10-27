import React from 'react';
import { Store, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business.config';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-linear-to-b from-rose-50/50 to-white border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Caixa de Imagem com Badge Flutuante */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=800"
                  alt="Astro Mixmax Loja em Chapadinha"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card Flutuante */}
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-rose-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-rose-100 text-rose-600 rounded-xl">
                    <Store className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{BUSINESS_CONFIG.name}</p>
                    <p className="text-xs text-slate-500">{BUSINESS_CONFIG.city} - Maranhão</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo de Texto e Destaques */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-100/70 px-3 py-1 rounded-full">
              Sua Opção em Chapadinha
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Sobre a Astro Mixmax
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              A <strong className="text-slate-900">Astro Mixmax</strong> é o seu ponto de referência em Chapadinha para encontrar itens de papelaria criativa, opções encantadoras de embalagens, mimos especiais e produtos personalizados para diversas ocasiões.[cite: 1]
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Nosso compromisso é unir praticidade, atendimento atencioso e produtos que tragam leveza e criatividade para o seu dia a dia, para seus estudos, ambiente de trabalho ou celebrações.[cite: 1]
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <h4 className="font-bold text-slate-900 text-sm">Atendimento Local</h4>
                <p className="text-xs text-slate-500 mt-1">Facilidade para trocar ideias diretamente no WhatsApp ou em loja.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <h4 className="font-bold text-slate-900 text-sm">Variedade de Opções</h4>
                <p className="text-xs text-slate-500 mt-1">Novidades constantes em presentes e itens criativos.</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_CONFIG.linkBioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-rose-600 font-bold text-sm hover:underline"
              >
                <span>Acesse nossa árvore de links oficial</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};