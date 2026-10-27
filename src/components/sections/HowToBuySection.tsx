import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  colorClass: string;
}

export const HowToBuySection: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: "Escolha o Produto",
      description: "Navegue por nossas categorias e vitrine de destaques para identificar o item ou a ideia desejada.",
      colorClass: "bg-rose-500", // Círculo Vermelho
    },
    {
      number: 2,
      title: "Fale no WhatsApp",
      description: "Clique nos botões de atendimento para enviar sua mensagem e consultar preços, personalização e estoque em tempo real.",
      colorClass: "bg-purple-500", // Círculo Roxo
    },
    {
      number: 3,
      title: "Combine Retirada ou Entrega",
      description: "Finalize os detalhes com a equipe e venha retirar na nossa loja no Centro de Chapadinha ou combine a melhor entrega.",
      colorClass: "bg-emerald-500", // Círculo Verde
    }
  ];

  return (
    <section id="como-comprar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Prático e Rápido
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Como Comprar na Astro Mixmax
          </h2>
          <p className="text-slate-600 text-sm">
            Três passos simples para garantir seus produtos com total comodidade.
          </p>
        </div>

        {/* Grelha de Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200/80 space-y-4 hover:shadow-lg transition-all duration-300"
            >
              {/* Indicador do Número do Passo */}
              <div className={`w-10 h-10 rounded-2xl ${step.colorClass} text-white font-extrabold text-lg flex items-center justify-center shadow-md`}>
                {step.number}
              </div>

              {/* Informações do Passo */}
              <h3 className="font-extrabold text-xl text-slate-900">
                {step.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};