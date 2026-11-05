import { ArrowUpRight } from 'lucide-react';
import { createWhatsAppUrl } from '../../config/business.config';

export const CtaBannerSection = () => {
  return (
    <section className="relative py-10 md:py-14 bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 text-neutral-900 font-sans overflow-hidden">
      
      {/* Efeitos sutis de brilho de fundo */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        
        {/* Título Principal */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-neutral-950">
          Procurando o presente ou item especial ideal em<br className="hidden sm:inline" /> Chapadinha?
        </h2>

        {/* Subtítulo Descritivo */}
        <p className="text-neutral-900/90 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-normal">
          Fale diretamente com nossa equipe, consulte novidades em estoque ou solicite a personalização do seu produto!
        </p>

        {/* Botão de Ação */}
        <div className="pt-2">
          <a
            href={createWhatsAppUrl("Olá! Vim pelo site da Astro Mixmax e gostaria de consultar produtos disponíveis.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-amber-400 font-bold text-xs shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            <span>Uma ocasião especial? Vamos montar uma combinação só sua</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
};