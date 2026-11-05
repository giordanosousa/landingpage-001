import { MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business.config';
import logo from '../../assets/logo-Astro-MixMax.png';

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 text-xs border-t border-neutral-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Coluna 1: Marca & Descrição */}
          <div className="space-y-4">
            {/* Logo Astro Mixmax em Card Amarelo */}
            <div className="w-44 h-20 bg-amber-400 rounded-2xl overflow-hidden shadow-xs">
              <img
                src={logo}
                alt={BUSINESS_CONFIG.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML = `<span class="font-black text-neutral-900 text-xl tracking-tighter">ASTRO<br/><span class="text-xs font-bold tracking-widest uppercase">MIXMAX</span></span>`;
                  }
                }}
              />
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-xs">
              Papelaria criativa, presentes, embalagens e produtos personalizados no Centro de Chapadinha - MA.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">Navegação</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#categorias" className="hover:text-white transition-colors">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">
                  Produtos em Destaque
                </a>
              </li>
              <li>
                <a href="#personalizacao" className="hover:text-white transition-colors">
                  Personalizados
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Onde Estamos
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Canais Oficiais */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">Canais Oficiais</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={BUSINESS_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors shrink-0"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 110 2.24 1.12 1.12 0 010-2.24z" />
                  </svg>
                  <span>Instagram (@astromixmax)</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors shrink-0" />
                  <span>Perfil no Google Maps</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_CONFIG.linkBioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors shrink-0" />
                  <span>Link list Bio Oficial</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Atendimento Local */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">Atendimento Local</h4>
            <p className="text-neutral-400 leading-relaxed">
              {BUSINESS_CONFIG.fullAddress}
            </p>
            <p className="text-neutral-400 pt-1">
              Chapadinha - MA - CEP 65500-000
            </p>
          </div>

        </div>

        {/* Rodapé Inferior (Direitos Reservados) */}
        <div className="pt-8 mt-12 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <p>© {new Date().getFullYear()} Astro Mixmax. Todos os direitos reservados.</p>
          <p>Landing page otimizada para conversão e SEO local em Chapadinha - MA.</p>
        </div>
      </div>
    </footer>
  );
};