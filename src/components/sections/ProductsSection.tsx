import { useState, useMemo } from 'react';
import { Search, MessageCircle, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../../config/products.data';
import { CATEGORIES } from '../../config/categories.data';
import { createWhatsAppUrl } from '../../config/business.config';

export const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section id="produtos" className="py-20 bg-slate-100/70 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho e Pesquisa */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Vitrine em Destaque
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Produtos em Evidência
            </h2>
            <p className="text-slate-600 text-sm max-w-xl">
              Confira algumas de nossas opções favoritas disponíveis na loja física ou sob encomenda.
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Buscar produto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          </div>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                : 'bg-white text-slate-600 hover:bg-rose-50 hover:text-rose-600 border border-slate-200'
            }`}
          >
            Todos os Itens
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                  : 'bg-white text-slate-600 hover:bg-rose-50 hover:text-rose-600 border border-slate-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Grelha de Produtos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold rounded-full">
                      {product.tag}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-rose-600 transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="pt-2">
                      <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg inline-block border border-emerald-100">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={createWhatsAppUrl(`Olá! Gostaria de consultar sobre o produto "${product.name}" na Astro Mixmax.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Consultar pelo WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">Nenhum produto encontrado</h3>
            <p className="text-xs text-slate-500 mt-1">
              Tente alterar a palavra de busca ou selecionar outra categoria.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }}
              className="mt-4 px-4 py-2 bg-rose-50 text-rose-600 font-semibold text-xs rounded-xl hover:bg-rose-100 transition-colors"
            >
              Limpar filtros
            </button>
          </div>
        )}

      </div>
    </section>
  );
};