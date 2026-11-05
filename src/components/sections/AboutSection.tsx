import { ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business.config';

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-neutral-100/80 text-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Caixa de Imagem com Legenda Inferior */}
          <div className="lg:col-span-5 space-y-3">
            <div className="aspect-4/3 sm:aspect-square rounded-3xl overflow-hidden bg-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=800"
                alt="Astro Mixmax Loja em Chapadinha"
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-xs font-semibold text-neutral-800">
              {BUSINESS_CONFIG.name} <span className="text-neutral-400 font-normal">/</span> {BUSINESS_CONFIG.city} · Maranhão
            </p>
          </div>

          {/* Conteúdo de Texto e Destaques */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 block">
              Sua Opção em Chapadinha
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Sobre a Astro Mixmax
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              A Astro Mixmax é o seu ponto de referência em Chapadinha para encontrar itens de papelaria criativa, opções encantadoras de embalagens, mimos especiais e produtos personalizados para diversas ocasiões.
            </p>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Nosso compromisso é unir praticidade, atendimento atencioso e produtos que tragam leveza e criatividade para o seu dia a dia, para seus estudos, ambiente de trabalho ou celebrações.
            </p>

            {/* Cards de Atendimento e Variedade */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs space-y-1">
                <h4 className="font-bold text-neutral-900 text-sm">Atendimento Local</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Facilidade para trocar ideias diretamente no WhatsApp ou em loja.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs space-y-1">
                <h4 className="font-bold text-neutral-900 text-sm">Variedade de Opções</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Novidades constantes em presentes e itens criativos.
                </p>
              </div>
            </div>

            {/* Botão de Link em Card */}
            <div className="pt-2">
              <a
                href={BUSINESS_CONFIG.linkBioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3.5 px-6 rounded-2xl bg-white border border-neutral-200/80 font-bold text-xs text-neutral-900 hover:bg-neutral-50 transition-colors shadow-xs group"
              >
                <span>Acesse nossa árvore de links oficial</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};