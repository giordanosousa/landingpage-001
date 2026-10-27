import { useState, useMemo } from 'react';
import { PenTool, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { createWhatsAppUrl } from '../../config/business.config';

export const CustomizationSection = () => {
  // Estado do simulador interativo de personalização
  const [customItemType, setCustomItemType] = useState('Caneca');
  const [customQuantity, setCustomQuantity] = useState('1 a 10 un');
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
    <section id="personalizacao" className="py-20 bg-linear-to-br from-purple-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      
      {/* Efeitos sutis de brilho de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna Esquerda: Texto e Benefícios */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <PenTool className="w-3.5 h-3.5" /> Soluções Personalizadas
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Transforme sua ideia em um presente exclusivo
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Procurando uma lembrança única com seu nome, frase especial ou o logotipo da sua marca? Na Astro Mixmax em Chapadinha, ajudamos a estruturar seu pedido personalizado sem complicações.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Sem burocracia</h4>
                  <p className="text-xs text-slate-400">Consulte modelos, valores e quantidades diretamente via WhatsApp.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Opções para Festas e Empresas</h4>
                  <p className="text-xs text-slate-400">Desde lembrancinhas individuais até mimos corporativos para clientes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Card Interativo de Simulação */}
          <div className="lg:col-span-6">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
              
              <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Simule sua Solicitação de Orçamento
              </h3>

              {/* Escolha do Item */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  O que você gostaria de personalizar?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Caneca', 'Copo Térmico', 'Planner/Bloco', 'Brinde Evento', 'Sacola/Caixa', 'Outro Item'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCustomItemType(item)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all border ${
                        customItemType === item
                          ? 'bg-rose-500 border-rose-400 text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Escolha da Quantidade */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Quantidade aproximada:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['1 a 10 un', '10 a 50 un', 'Mais de 50 un'].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setCustomQuantity(qty)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all border ${
                        customQuantity === qty
                          ? 'bg-rose-500 border-rose-400 text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
              </div>

              {/* Campo para Detalhes Extras */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Detalhes extras (opcional):
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Quero com frase 'Melhor Professora' e tema floral..."
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              {/* Botão de Envio Dinâmico */}
              <a
                href={customWhatsAppMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.01]"
              >
                <Send className="w-4 h-4 fill-white" />
                <span>Quero consultar uma personalização</span>
              </a>

              <p className="text-[11px] text-slate-400 text-center">
                Você será redirecionado ao WhatsApp com estas preferências pré-preenchidas.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};