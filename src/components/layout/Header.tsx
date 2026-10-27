import React, { useState } from 'react';
import { Sparkles, MessageCircle, Menu, X } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppUrl } from '../../config/business.config';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-linear-to-tr from-rose-500 via-pink-500 to-purple-600 p-0.5 shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-rose-500 fill-rose-100" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tight bg-linear-to-r from-rose-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
                {BUSINESS_CONFIG.name}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 -mt-1">
                {BUSINESS_CONFIG.city} • Maranhão
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#categorias" className="hover:text-rose-600 transition-colors">Categorias</a>
            <a href="#produtos" className="hover:text-rose-600 transition-colors">Destaques</a>
            <a href="#personalizacao" className="hover:text-rose-600 transition-colors">Personalizados</a>
            <a href="#como-comprar" className="hover:text-rose-600 transition-colors">Como Comprar</a>
            <a href="#sobre" className="hover:text-rose-600 transition-colors">Sobre a Loja</a>
            <a href="#localizacao" className="hover:text-rose-600 transition-colors">Localização</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={createWhatsAppUrl("Olá! Conheci a Astro Mixmax pelo site e gostaria de tirar uma dúvida.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Atendimento WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-rose-100 px-4 pt-2 pb-6 space-y-3">
          <a href="#categorias" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600">Categorias</a>
          <a href="#produtos" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600">Destaques</a>
          <a href="#personalizacao" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600">Personalizados</a>
          <a href="#como-comprar" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600">Como Comprar</a>
          <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600">Sobre</a>
          <a href="#localizacao" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600">Localização</a>
          <div className="pt-2">
            <a
              href={createWhatsAppUrl("Olá! Conheci a Astro Mixmax pelo site e gostaria de saber mais informações.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 text-white font-semibold text-sm shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};