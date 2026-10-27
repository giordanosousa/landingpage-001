import React from 'react';
import { Sparkles, MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business.config';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Coluna 1: Marca & Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-rose-500 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">{BUSINESS_CONFIG.name}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Papelaria criativa, presentes, embalagens e produtos personalizados no Centro de Chapadinha - MA.[cite: 1]
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#categorias" className="hover:text-rose-400 transition-colors">Categorias</a></li>
              <li><a href="#produtos" className="hover:text-rose-400 transition-colors">Produtos em Destaque</a></li>
              <li><a href="#personalizacao" className="hover:text-rose-400 transition-colors">Personalizados</a></li>
              <li><a href="#localizacao" className="hover:text-rose-400 transition-colors">Onde Estamos</a></li>
            </ul>
          </div>

          {/* Coluna 3: Canais Oficiais */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">Canais Oficiais</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={BUSINESS_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-rose-400 transition-colors"
                >
                  {/* Ícone Inline do Instagram em SVG */}
                  <svg className="w-4 h-4 text-rose-400 fill-none stroke-current stroke-2 viewBox-0-0-24-24 stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>Instagram (@astromixmax)</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-rose-400 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Perfil no Google Maps</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_CONFIG.linkBioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-rose-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-purple-400" />
                  <span>Link list Bio Oficial</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Atendimento Local */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">Atendimento Local</h4>
            <p className="text-slate-400 leading-relaxed">
              {BUSINESS_CONFIG.fullAddress}
            </p>
            <p className="text-slate-500 pt-1">
              Chapadinha - MA • CEP 65500-000
            </p>
          </div>

        </div>

        {/* Rodapé Inferior (Direitos Reservados) */}
        <div className="pt-10 mt-10 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Astro Mixmax. Todos os direitos reservados.</p>
          <p>Landing page otimizada para conversão e SEO local em Chapadinha - MA.</p>
        </div>
      </div>
    </footer>
  );
};