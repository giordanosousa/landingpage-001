import { useState } from 'react';
import { 
  ArrowUpRight, 
  X, 
  User, 
  FileUp,
  Gift
} from 'lucide-react';
import { 
  STEPS, 
  EXTRA_STEP, 
  CUSTOM_CATEGORIES, 
  PERSONALIZATION_OPTIONS, 
  CREATION_PROCESSES, 
  COMBO_KITS 
} from '../../config/personaliza.data';
import { createWhatsAppUrl } from '../../config/business.config';

export const ProductsSection = () => {
  const [activeStep, setActiveStep] = useState<string>('produtos');
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  const handleStepClick = (stepId: string) => {
    setActiveStep(stepId);
    if (window.innerWidth < 1024) {
      setIsMobileModalOpen(true);
    }
  };

  const handleBudgetClick = () => {
    const url = createWhatsAppUrl("Olá! Gostaria de solicitar um orçamento para produtos personalizados na Astro Mixmax.");
    window.open(url, '_blank');
  };

  return (
    <section className="bg-neutral-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans text-neutral-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* ----------------- PAINEL LATERAL ESQUERDO ----------------- */}
        <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-neutral-500 uppercase">
              Astro Personaliza
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-neutral-900 leading-tight">
              Sua marca.<br />Do seu jeito.
            </h1>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              Escolha, personalize e surpreenda. Transforme sua ideia em brindes, presentes e impressos com identidade.
            </p>

            {/* Passos Principais (01, 02, 03) */}
            <div className="mt-8 space-y-3">
              {STEPS.map((step) => {
                const Icon = step.icon;
                const isActive = activeStep === step.id;

                return (
                  <button
                    key={step.id}
                    onClick={() => handleStepClick(step.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl font-semibold text-sm transition-all duration-200 text-left border ${
                      isActive
                        ? 'bg-amber-400 text-neutral-900 border-amber-400 shadow-sm'
                        : 'bg-white text-neutral-800 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-neutral-900" />
                      <span>{step.title}</span>
                    </div>
                    <span className="text-xs font-mono text-neutral-700">{step.stepNumber}</span>
                  </button>
                );
              })}
            </div>

            {/* Seção Mais Possibilidades */}
            <div className="mt-8">
              <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                Mais Possibilidades
              </span>
              <button
                onClick={() => handleStepClick(EXTRA_STEP.id)}
                className={`w-full mt-3 flex items-center gap-3 p-4 rounded-2xl font-semibold text-sm transition-all text-left border ${
                  activeStep === EXTRA_STEP.id
                    ? 'bg-amber-400 text-neutral-900 border-amber-400'
                    : 'bg-neutral-50 text-neutral-800 border-neutral-100 hover:bg-neutral-100'
                }`}
              >
                <Gift className="w-5 h-5 text-neutral-900" />
                <span>{EXTRA_STEP.title}</span>
              </button>
            </div>
          </div>

          {/* Botão de Solicitacão de Orçamento */}
          <div className="mt-10">
            <button
              onClick={handleBudgetClick}
              className="w-full flex items-center justify-between py-4 px-6 rounded-2xl bg-neutral-900 text-amber-400 font-bold text-sm hover:bg-neutral-800 transition-colors shadow-md group"
            >
              <span>Solicitar meu orçamento</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <p className="text-[11px] text-neutral-400 text-center mt-3">
              Possibilidades e quantidades sob consulta.
            </p>
          </div>
        </div>

        {/* ----------------- PAINEL DE CONTEÚDO (DESKTOP) ----------------- */}
        <div className="hidden lg:block lg:col-span-8 bg-neutral-100">
          {activeStep === 'produtos' && <Step01Products />}
          {activeStep === 'opcoes' && <Step02Personalization />}
          {activeStep === 'processo' && <Step03Creation />}
          {activeStep === 'kits' && <StepKits />}
        </div>

        {/* ----------------- MODAL / DRAWER (MOBILE) ----------------- */}
        {isMobileModalOpen && (
          <div className="fixed inset-0 z-50 flex flex-col bg-neutral-100 overflow-y-auto lg:hidden">
            <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Astro Personaliza
              </span>
              <button
                onClick={() => setIsMobileModalOpen(false)}
                className="p-2 rounded-full hover:bg-neutral-100 text-neutral-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {activeStep === 'produtos' && <Step01Products />}
              {activeStep === 'opcoes' && <Step02Personalization />}
              {activeStep === 'processo' && <Step03Creation />}
              {activeStep === 'kits' && <StepKits />}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

/* --- PASSO 01: Escolha do produto --- */
const Step01Products = () => (
  <div className="space-y-6">
    <div>
      <span className="bg-amber-400 text-neutral-900 font-extrabold text-[11px] px-3 py-1 rounded-full inline-block">
        01 / 03
      </span>
      <h2 className="text-3xl font-extrabold text-neutral-900 mt-3 tracking-tight">
        Comece por uma boa escolha.
      </h2>
      <p className="text-neutral-500 text-sm mt-1">
        Produtos para dar vida à sua ideia — e levar sua marca mais longe.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {CUSTOM_CATEGORIES.map((cat) => (
        <a
          key={cat.id}
          href={createWhatsAppUrl(cat.whatsappMessage || `Olá! Tenho interesse no item ${cat.title}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
        >
          <div className="h-44 bg-neutral-100 overflow-hidden">
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 flex items-start justify-between">
            <div>
              <h3 className="font-bold text-neutral-900 text-base">{cat.title}</h3>
              <p className="text-neutral-400 text-xs mt-0.5">{cat.subtitle}</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform mt-1" />
          </div>
        </a>
      ))}
    </div>

    <p className="text-xs text-neutral-500 text-center pt-4">
      Não encontrou o que procura? Conte sua ideia para a gente.
    </p>
  </div>
);

/* --- PASSO 02: Opções de personalização --- */
const Step02Personalization = () => (
  <div className="space-y-6">
    <div>
      <span className="bg-amber-400 text-neutral-900 font-extrabold text-[11px] px-3 py-1 rounded-full inline-block">
        02 / 03
      </span>
      <h2 className="text-3xl font-extrabold text-neutral-900 mt-3 tracking-tight">
        Os detalhes fazem a diferença.
      </h2>
      <p className="text-neutral-500 text-sm mt-1">
        Explore as possibilidades e encontre a combinação que tem a sua cara.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {PERSONALIZATION_OPTIONS.map((opt) => (
        <div
          key={opt.id}
          className="bg-white rounded-2xl p-4 border border-neutral-200/80 flex items-center gap-4 shadow-xs"
        >
          <img
            src={opt.image}
            alt={opt.title}
            className="w-24 h-24 rounded-xl object-cover bg-neutral-100 shrink-0"
          />
          <div className="space-y-1">
            <h3 className="font-bold text-neutral-900 text-sm">{opt.title}</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">{opt.description}</p>
          </div>
        </div>
      ))}
    </div>

    <p className="text-xs text-neutral-500 text-center pt-4">
      As possibilidades variam conforme o produto. Consulte técnicas, materiais e quantidades.
    </p>
  </div>
);

/* --- PASSO 03: Processo de criação --- */
const Step03Creation = () => (
  <div className="space-y-6">
    <div>
      <span className="bg-amber-400 text-neutral-900 font-extrabold text-[11px] px-3 py-1 rounded-full inline-block">
        03 / 03
      </span>
      <h2 className="text-3xl font-extrabold text-neutral-900 mt-3 tracking-tight">
        Toda grande ideia começa aqui.
      </h2>
      <p className="text-neutral-500 text-sm mt-1">
        Com uma ideia pronta ou uma página em branco, vamos criar juntos.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {CREATION_PROCESSES.map((proc) => (
        <div key={proc.id} className="bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center text-neutral-900">
              {proc.iconType === 'user' ? <User className="w-6 h-6" /> : <FileUp className="w-6 h-6" />}
            </div>
            <div>
              <span className="text-xs font-medium text-neutral-400">{proc.tag}</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">{proc.title}</h3>
            </div>
            <p className="text-neutral-500 text-xs leading-relaxed">{proc.description}</p>
          </div>

          <a
            href={createWhatsAppUrl(`Olá! ${proc.actionText}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-between text-xs font-bold text-neutral-900 hover:text-amber-600 transition-colors group"
          >
            <span>{proc.actionText}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      ))}
    </div>

    {/* Banner Inferior de Etapas */}
    <div className="bg-neutral-900 rounded-2xl p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h4 className="font-bold text-sm">Você acompanha cada etapa.</h4>
        <p className="text-xs text-neutral-400 mt-1">Antes de produzir, alinhamos cada detalhe com você.</p>
      </div>
      <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
        <span>Briefing</span>
        <span>&rarr;</span>
        <span>Arte</span>
        <span>&rarr;</span>
        <span>Aprovação</span>
      </div>
    </div>

    <p className="text-xs text-neutral-500 text-center pt-2">
      Um processo próximo, do primeiro contato à aprovação da sua criação.
    </p>
  </div>
);

/* --- SEÇÃO EXTRA: Kits e Combinações --- */
const StepKits = () => (
  <div className="space-y-6">
    <div>
      <span className="bg-amber-400 text-neutral-900 font-extrabold text-[11px] px-3 py-1 rounded-full inline-block">
        KITS E PRESENTES
      </span>
      <h2 className="text-3xl font-extrabold text-neutral-900 mt-3 tracking-tight">
        Juntos, eles surpreendem mais.
      </h2>
      <p className="text-neutral-500 text-sm mt-1">
        Combine produtos e crie uma experiência que vai além do presente.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {COMBO_KITS.map((kit) => (
        <div
          key={kit.id}
          className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xs flex flex-col justify-between"
        >
          <div className="flex p-4 gap-4">
            <img
              src={kit.image}
              alt={kit.title}
              className="w-28 h-28 rounded-xl object-cover bg-neutral-100 shrink-0"
            />
            <div className="space-y-1">
              <h3 className="font-bold text-neutral-900 text-base">{kit.title}</h3>
              <p className="text-[11px] font-semibold text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded inline-block">
                {kit.items}
              </p>
              <p className="text-neutral-500 text-xs leading-relaxed pt-1">{kit.description}</p>
            </div>
          </div>

          <div className="px-4 pb-4">
            <a
              href={createWhatsAppUrl(`Olá! Gostaria de consultar sobre o kit "${kit.title}".`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-neutral-900 hover:text-amber-600 transition-colors group"
            >
              <span>Criar meu kit</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      ))}
    </div>

    {/* Banner Amarelo de Orçamento Exclusivo */}
    <a
      href={createWhatsAppUrl("Olá! Tenho uma ocasião especial e gostaria de montar uma combinação exclusiva.")}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-amber-400 hover:bg-amber-500 transition-colors rounded-2xl p-4 flex items-center justify-between text-neutral-900 font-bold text-xs shadow-xs group"
    >
      <span>Uma ocasião especial? Vamos montar uma combinação só sua.</span>
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  </div>
);