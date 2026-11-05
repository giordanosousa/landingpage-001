interface Step {
  number: string;
  title: string;
  description: string;
}

export const HowToBuySection = () => {
  const steps: Step[] = [
    {
      number: "01",
      title: "Escolha o Produto",
      description: "Navegue por nossas categorias e vitrine de destaques para identificar o item ou a ideia desejada.",
    },
    {
      number: "02",
      title: "Fale no WhatsApp",
      description: "Clique nos botões de atendimento para enviar sua mensagem e consultar preços, personalização e estoque em tempo real.",
    },
    {
      number: "03",
      title: "Combine Retirada ou Entrega",
      description: "Finalize os detalhes com a equipe e venha retirar na nossa loja no Centro de Chapadinha ou combine a melhor entrega.",
    }
  ];

  return (
    <section id="como-comprar" className="py-16 md:py-24 bg-white text-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Prático e Rápido
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Como Comprar na Astro Mixmax
          </h2>
          <p className="text-slate-600 text-sm">
            Três passos simples para garantir seus produtos com total comodidade.
          </p>
        </div>

        {/* Grelha de Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-neutral-100/80 rounded-3xl p-8 border border-neutral-200/60 flex flex-col justify-between space-y-6"
            >
              {/* Indicador Amarelo com Dois Dígitos */}
              <div className="w-12 h-9 rounded-md bg-amber-400 text-neutral-900 font-extrabold text-sm flex items-center justify-center">
                {step.number}
              </div>

              {/* Informações do Passo */}
              <div className="space-y-3">
                <h3 className="font-extrabold text-xl text-neutral-900">
                  {step.title}
                </h3>
                
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};