import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../../config/categories.data';
import { createWhatsAppUrl } from '../../config/business.config';

export const CategoriesSection = () => {
  return (
    <section id="categorias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            O que você encontra aqui
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Categorias Principais
          </h2>
          <p className="text-slate-600 text-base">
            Navegue pelas nossas opções para presentear, organizar sua rotina ou destacar sua marca.
          </p>
        </div>

        {/* Grelha de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 hover:border-rose-300 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                {/* Imagem de Capa */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 font-bold text-xs rounded-full shadow-xs">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Título e Ícone */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <div className="p-2 rounded-xl bg-rose-500/90 text-white backdrop-blur-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-xl text-white tracking-wide">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Descrição e Ação */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {cat.description}
                  </p>

                  <a
                    href={createWhatsAppUrl(cat.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-3 rounded-2xl bg-white hover:bg-rose-50 text-rose-600 font-semibold text-sm border border-rose-200 transition-colors shadow-xs"
                  >
                    <span>Consultar no WhatsApp</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};