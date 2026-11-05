import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { createWhatsAppUrl } from '../../config/business.config';
import logo from '../../assets/logo-Astro-MixMax.png';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Produtos", href: "#produtos" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Como Comprar", href: "#como-comprar" },
    { label: "Sobre a Loja", href: "#sobre" },
    { label: "Localização", href: "#localizacao" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFD504]/95 backdrop-blur-md border-b border-rose-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div>
              <img src={logo}
                  alt="Astro Mix Max"
                  className="h-15 w-auto object-contain" />
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  relative
                  text-[#171717]
                  font-medium
                  hover:text-[#555555]
                  transition-colors
                  duration-300

                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:w-0
                  after:h-0.5
                  after:bg-[#555555]
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          

          <div className="hidden md:flex items-center gap-3">
            <a
              href={createWhatsAppUrl(
                "Olá! Conheci a Astro Mixmax pelo site e gostaria de tirar uma dúvida."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-5
                px-5
                py-3
                rounded-lg
                bg-[#171717]
                text-[#FFD504]
                font-
                text-sm
                hover:bg-[#333333]
                hover:-translate-y-0.5
                transition-all
                duration-300
                shadow-sm
                active:scale-95"
              >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="
              md:hidden
              p-2
              rounded-xl
              text-[#171717]
              hover:bg-black/10
              hover:text-[#555555]
              transition-colors
              duration-300
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#171717]
            "
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          </div>
          </div>

          {/* Menu de navegação mobile */}
          {mobileMenuOpen && (
            <div
              id="mobile-navigation"
              className="
                md:hidden
                bg-[#FFD504]
                border-b
                border-[#E6BF00]
                px-4
                pt-2
                pb-6
                space-y-3
              "
            >
              {[
                { label: "Categorias", href: "#categorias" },
                { label: "Produtos", href: "#produtos" },
                { label: "Soluções", href: "#solucoes" },
                { label: "Como Comprar", href: "#como-comprar" },
                { label: "Sobre a Loja", href: "#sobre" },
                { label: "Localização", href: "#localizacao" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    block
                    px-3
                    py-2
                    rounded-lg
                    text-base
                    font-normal
                    text-[#171717]
                    hover:text-[#555555]
                    hover:bg-black/10
                    transition-colors
                    duration-300
                  "
                >
                  {item.label}
                </a>
              ))}

              {/* Botão de orçamento */}
              <div className="pt-3">
                <a
                  href={createWhatsAppUrl(
                    "Olá! Conheci a Astro Mix Max pelo site e gostaria de solicitar um orçamento."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-3
                    px-5
                    py-3
                    rounded-lg
                    bg-[#171717]
                    text-[#FFD504]
                    font-medium
                    text-sm
                    hover:bg-[#333333]
                    transition-all
                    duration-300
                    active:scale-95
                  "
                >
                  <span>Solicitar orçamento</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          )}

    </header>
  );
};