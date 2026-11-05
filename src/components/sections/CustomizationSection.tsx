import { useState, useMemo } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { createWhatsAppUrl } from '../../config/business.config';

export const CustomizationSection = () => {
  // Estado do simulador interativo de personalização
  const [customItemType, setCustomItemType] = useState('Planner/Bloco');
  const [customQuantity, setCustomQuantity] = useState('Mais de 50 un');
  const [customNotes, setCustomNotes] = useState('');

  // Construção dinâmica da mensagem para o WhatsApp
  const customWhatsAppMessage = useMemo(() => {
    let msg = `Olá! Gostaria de fazer um orçamento para personalização:\n`;
    msg += `• Tipo de Item: ${customItemType}\n`;
    msg += `• Quantidade Estimada: ${customQuantity}\n`;
    if (customNotes.trim()) {
      msg += `• Detalhes da Ideia: ${customNotes.trim()}\n`;
    }
    msg += `Poderiam me informar valores e prazos?`;
    return createWhatsAppUrl(msg);
  }, [customItemType, customQuantity, customNotes]);

  return (
    <section id="solucoes" className="py-16 md:py-24 bg-neutral-100 text-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna Esquerda: Texto e Benefícios */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-bold tracking-widest text-neutral-600 uppercase">
              Soluções Personalizadas
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-neutral-900">
              Transforme sua ideia em um presente exclusivo
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Procurando uma lembrança única com o seu nome, frase especial ou o logotipo da sua marca? Na Astro Mixmax em Chapadinha, ajudamos a estruturar seu pedido personalizado sem complicações.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-neutral-900">Sem burocracia</h4>
                  <p className="text-xs text-neutral-500">Consulte modelos, valores e quantidades diretamente via WhatsApp.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-neutral-900">Opções para Festas e Empresas</h4>
                  <p className="text-xs text-neutral-500">Desde lembrancinhas individuais até mimos corporativos para clientes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Card Interativo de Simulação */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-xs space-y-6">
              
              <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900">
                Simule sua Solicitação de Orçamento
              </h3>

              {/* Escolha do Item */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block">
                  O que você gostaria de personalizar?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {['Caneca', 'Copo Térmico', 'Planner/Bloco', 'Brinde Evento', 'Sacola/Caixa', 'Outro Item'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCustomItemType(item)}
                      className={`py-3 px-4 rounded-xl text-xs transition-all text-center ${
                        customItemType === item
                          ? 'bg-amber-400 text-neutral-900 font-extrabold shadow-xs'
                          : 'bg-neutral-100/80 hover:bg-neutral-200/60 text-neutral-800 font-semibold border border-neutral-200/60'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Escolha da Quantidade */}
              <div className="space-y-3 pt-2">
                <label className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block">
                  Quantidade aproximada:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {['1 a 10 un', '10 a 50 un', 'Mais de 50 un'].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setCustomQuantity(qty)}
                      className={`py-3 px-4 rounded-xl text-xs transition-all text-center ${
                        customQuantity === qty
                          ? 'bg-amber-400 text-neutral-900 font-extrabold shadow-xs'
                          : 'bg-neutral-100/80 hover:bg-neutral-200/60 text-neutral-800 font-semibold border border-neutral-200/60'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
              </div>

              {/* Campo para Detalhes Extras */}
              <div className="space-y-2 pt-2">
                <label className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block">
                  Detalhes extras (opcional):
                </label>
                <textarea
                  rows={3}
                  placeholder='Ex: Quero com frase "Melhor Professora" e tema floral...'
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full bg-neutral-100/80 border border-neutral-200/80 rounded-2xl p-4 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all resize-none"
                />
              </div>

              {/* Botão de Envio Dinâmico */}
              <a
                href={customWhatsAppMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-amber-400 hover:bg-amber-500 text-neutral-900 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xs group"
              >
                <span>Quero consultar uma personalização</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <p className="text-[11px] text-neutral-400 text-center">
                Você será redirecionado ao WhatsApp com estas preferências pré-preenchidas.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};