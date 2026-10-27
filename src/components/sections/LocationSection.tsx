import React from 'react';
import { MapPin, Clock, ExternalLink, Store } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business.config';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna de Informações (Esquerda) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider border border-rose-500/30">
                <MapPin className="w-3.5 h-3.5" /> Venha nos Visitar
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Localização e Funcionamento
              </h2>
              <p className="text-slate-400 text-sm">
                Estamos localizados no coração de Chapadinha - MA.
              </p>
            </div>

            {/* Card do Endereço */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-rose-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-base text-white">Endereço Confirmado</h4>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    {BUSINESS_CONFIG.fullAddress}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md transition-all"
                >
                  <span>Como chegar pelo Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card de Horários */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Clock className="w-5 h-5" />
                <span>Horários de Atendimento</span>
              </div>
              
              <div className="space-y-2 divide-y divide-white/5">
                {BUSINESS_CONFIG.hours.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-xs text-slate-300 pt-2 first:pt-0">
                    <span>{item.days}</span>
                    <span className="font-semibold text-white">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Coluna do Mapa Visual Simulado (Direita) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800 h-96 sm:h-105 flex flex-col justify-between p-6">
              
              {/* Padrão de fundo do mapa */}
              <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] bg-size-[16px_16px] opacity-40"></div>
              
              {/* Header sobreposto no mapa */}
              <div className="relative z-10 flex items-center justify-between bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-xs text-white">Astro Mixmax no Google Maps</p>
                    <p className="text-[11px] text-slate-400">Chapadinha - Maranhão</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Aberto para Consultas
                </span>
              </div>

              {/* Marcador central */}
              <div className="relative z-10 my-auto text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-rose-600/20 border border-rose-500/40 text-rose-500 animate-bounce">
                  <MapPin className="w-10 h-10 fill-rose-500 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">Rua Prefeito Joaquim Almeida, 387-A</h3>
                  <p className="text-xs text-slate-400">Centro • Chapadinha - MA</p>
                </div>
              </div>

              {/* Botão de Ação do Mapa */}
              <div className="relative z-10">
                <a
                  href={BUSINESS_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <span>Abrir Perfil Oficial no Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};