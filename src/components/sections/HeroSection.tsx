import React from 'react';
import { Store, MessageCircle, ShoppingBag, Sparkles, PenTool, MapPin, Heart, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppUrl } from '../../config/business.config';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-rose-50/70 via-amber-50/30 to-slate-50 pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40 blur-3xl">
        <div className="absolute top-0 right-10 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply"></div>
        <div className="absolute top-20 left-1/3 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-700 text-xs sm:text-sm font-semibold tracking-wide">
              <Store className="w-4 h-4 text-rose-600" />
              <span>Loja Física no Centro de Chapadinha - MA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {BUSINESS_CONFIG.slogan}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Encontre produtos de papelaria, brindes, embalagens e opções personalizadas na <strong className="text-slate-900 font-semibold">Astro Mixmax</strong>. Transforme presentes em momentos inesquecíveis com a facilidade do atendimento via WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={createWhatsAppUrl("Olá! Vim pelo site da Astro Mixmax e gostaria de atendimento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Fale com a gente no WhatsApp</span>
              </a>

              <a
                href="#produtos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white hover:bg-rose-50 text-slate-700 border border-slate-200 font-semibold text-base shadow-sm transition-all hover:text-rose-600"
              >
                <ShoppingBag className="w-5 h-5 text-rose-500" />
                <span>Conheça nossos produtos</span>
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-rose-600 font-bold text-lg">
                  <Sparkles className="w-4 h-4" /> Variedade
                </div>
                <p className="text-xs text-slate-500">Itens criativos e atualizados</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-purple-600 font-bold text-lg">
                  <PenTool className="w-4 h-4" /> Personalizável
                </div>
                <p className="text-xs text-slate-500">Do seu jeito e estilo</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-emerald-600 font-bold text-lg">
                  <MapPin className="w-4 h-4" /> Chapadinha
                </div>
                <p className="text-xs text-slate-500">Retirada rápida no Centro</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 bg-linear-to-r from-rose-400 via-pink-400 to-amber-300 rounded-3xl blur-xl opacity-30 animate-pulse"></div>

              <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800"
                  alt="Astro Mixmax Produtos de Papelaria e Presentes Criativos"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                
                <div className="p-6 bg-linear-to-br from-white to-rose-50/50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-rose-100 text-rose-600">
                      <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
                    </div>
                    <div>
                      <h2 className="text-slate-900 font-bold text-base">Atendimento Próximo & Personalizado</h2>
                      <p className="text-xs text-slate-500">Tire dúvidas e consulte itens diretamente</p>
                    </div>
                  </div>
                  
                  <a
                    href={BUSINESS_CONFIG.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-between transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-400" />
                      Ver localização no Google Maps
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};