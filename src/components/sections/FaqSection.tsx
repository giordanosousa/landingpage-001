import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../../config/faq.data';

export const FaqSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-neutral-100/80 text-neutral-900 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção Alinhado à Esquerda */}
        <div className="space-y-2 mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 block">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Dúvidas Frequentes
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base pt-1">
            Confira as respostas para as principais perguntas sobre nossos produtos e atendimento.
          </p>
        </div>

        {/* Lista Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 font-bold text-neutral-900 text-sm sm:text-base focus:outline-none transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    {!isOpen && (
                      <span className="font-extrabold text-neutral-900 text-sm leading-snug shrink-0">
                        ?
                      </span>
                    )}
                    <div className="space-y-3">
                      <span className="block leading-snug">{faq.question}</span>
                      {isOpen && (
                        <p className="font-normal text-neutral-500 text-xs sm:text-sm leading-relaxed pr-2">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  </div>

                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                  )}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};