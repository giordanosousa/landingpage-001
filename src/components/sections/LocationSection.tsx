import { ArrowUpRight, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business.config';

export const LocationSection = () => {
  return (
    <section id="localizacao" className="py-16 md:py-24 bg-white text-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna de Informações (Esquerda) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 block">
                Venha nos Visitar
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Localização e<br />Funcionamento
              </h2>
              <p className="text-neutral-500 text-sm pt-1">
                Estamos localizados no coração de Chapadinha - MA.
              </p>
            </div>

            {/* Card do Endereço */}
            <div className="p-6 rounded-3xl bg-neutral-100/80 border border-neutral-200/60 space-y-4">
              <div>
                <h4 className="font-bold text-sm text-neutral-900">Endereço Confirmado</h4>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1 leading-relaxed">
                  {BUSINESS_CONFIG.fullAddress}
                </p>
              </div>

              <a
                href={BUSINESS_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-neutral-900 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs group"
              >
                <span>Como chegar pelo Google Maps</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Card de Horários */}
            <div className="p-6 rounded-3xl bg-neutral-100/80 border border-neutral-200/60 space-y-4">
              <h4 className="font-bold text-sm text-neutral-900">Horários de Atendimento</h4>
              
              <div className="space-y-3">
                {BUSINESS_CONFIG.hours.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-xs text-neutral-500">
                    <span>{item.days}</span>
                    <span className="font-bold text-neutral-900">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Coluna do Mapa Visual Simulado (Direita) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 min-h-110 sm:min-h-120 flex flex-col justify-between p-8 sm:p-10 text-white shadow-xl">
              
              {/* Header sobreposto no mapa */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-base text-white">{BUSINESS_CONFIG.name} no Google Maps</h3>
                  <p className="text-xs text-neutral-400">{BUSINESS_CONFIG.city} · Maranhão</p>
                </div>

                <span className="inline-block bg-amber-400 text-neutral-900 font-extrabold text-[11px] px-3 py-1 rounded-md">
                  Aberto para Consultas
                </span>
              </div>

              {/* Marcador central */}
              <div className="my-auto text-center space-y-2 py-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-400 text-neutral-900 mb-1">
                  <MapPin className="w-6 h-6 fill-neutral-900 text-amber-400" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Rua Prefeito Joaquim Almeida, 387-A
                </h3>
                <p className="text-xs text-neutral-400">
                  Centro · Chapadinha - MA
                </p>
              </div>

              {/* Botão de Ação do Mapa */}
              <div>
                <a
                  href={BUSINESS_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-amber-400 hover:bg-amber-500 text-neutral-900 text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs group"
                >
                  <span>Abrir Perfil Oficial no Google Maps</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};