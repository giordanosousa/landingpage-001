# 🚀 Astro Mixmax - Landing Page Comercial

Esta é a documentação completa da Landing Page da **Astro Mixmax**, desenvolvida com **React**, **TypeScript**, **Vite** e **Tailwind CSS v4**, seguindo os princípios de **Clean Code** e separação de responsabilidades.

---

## 📁 Estrutura de Pastas (Clean Code)

A estrutura do projeto foi organizada para manter componentes reutilizáveis, seções isoladas e arquivos de configuração centralizados:

```text
astro-mixmax/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx         # Cabeçalho de navegação fixa
│   │   │   └── Footer.tsx         # Rodapé com dados institucionais
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx          # Seção 1: Apresentação Principal
│   │   │   ├── CategoriesSection.tsx    # Seção 2: Categorias Principais
│   │   │   ├── ProductsSection.tsx      # Seção 3: Vitrine e Filtros
│   │   │   ├── HowToBuySection.tsx      # Seção 4: Passo a Passo
│   │   │   ├── CustomizationSection.tsx # Seção 5: Simulador de Orçamento
│   │   │   ├── AboutSection.tsx         # Seção 6: Sobre a Loja
│   │   │   ├── LocationSection.tsx      # Seção 7: Localização & Horários
│   │   │   ├── FaqSection.tsx           # Seção 8: Dúvidas Frequentes (Accordion)
│   │   │   └── CtaBannerSection.tsx     # Seção 9: Chamada para Ação Final
│   │   └── ui/
│   │       └── FloatingWhatsapp.tsx     # Botão flutuante do WhatsApp
│   ├── config/
│   │   ├── business.config.ts     # Dados institucionais e helper do WhatsApp
│   │   ├── categories.data.ts     # Dados das categorias de produtos
│   │   ├── products.data.ts       # Lista de produtos em destaque
│   │   └── faq.data.ts            # Perguntas e respostas frequentes
│   ├── App.tsx                    # Orquestrador da página
│   ├── index.css                  # Importações globais do Tailwind v4
│   └── main.tsx                   # Ponto de entrada da aplicação
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts                 # Configuração com plugin oficial Tailwind
```

---

## 💻 Como Rodar o Projeto Localmente

1. **Instalar Dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o Servidor de Desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar a Aplicação:**
   Abra no seu navegador o endereço indicado (normalmente `http://localhost:5173`).

---

## 🧩 Componentes Base e Estrutura Institucional

### 1. `Header.tsx` (Cabeçalho de Navegação)
- **Localização:** `src/components/layout/Header.tsx`
- **Descrição:** Header fixo no topo (`sticky`) com efeito *glassmorphism* (`backdrop-blur-md`).
- **Recursos:**
  - Logo e slogan compacto da **Astro Mixmax**.
  - Menu de navegação desktop com links âncora (`#categorias`, `#produtos`, etc.).
  - Botão principal de ação direto para o WhatsApp.
  - Menu responsivo do tipo *Drawer/Accordion* para dispositivos móveis.

### 2. `Footer.tsx` (Rodapé Oficial)
- **Localização:** `src/components/layout/Footer.tsx`
- **Descrição:** Rodapé em tom escuro (`slate-950`) estruturado em 4 colunas.
- **Recursos:**
  - Resumo da loja e atuação em Chapadinha - MA.
  - Links rápidos de navegação interna.
  - Links para canais oficiais (Instagram, Google Maps, TreeLink/Bio).
  - Endereço completo e informações de direitos autorais.

### 3. `FloatingWhatsapp.tsx` (Botão Flutuante)
- **Localização:** `src/components/ui/FloatingWhatsapp.tsx`
- **Descrição:** Botão fixo no canto inferior direito (`fixed bottom-6 right-6 z-50`).
- **Recursos:**
  - Animação de hover expandindo a label "Atendimento WhatsApp".
  - Redirecionamento automático preenchendo a mensagem para o número da loja.

---

## 📄 Detalhamento das Seções / Telas da Landing Page

### 1. Hero Section (`HeroSection.tsx`)
- **Objetivo:** Apresentação de impacto inicial.
- **Destaques:** Badge de loja física em Chapadinha, título de alto engajamento, botões diretos para WhatsApp e Vitrine de Produtos, card flutuante com link do Google Maps.

### 2. Categorias Principais (`CategoriesSection.tsx`)
- **Objetivo:** Apresentar a diversidade de produtos.
- **Destaques:** Grid com os 5 pilares do negócio (Papelaria Criativa, Brindes & Eventos, Embalagens & Caixas, Canecas & Copos e Produtos Personalizados) com badges e botões de consulta contextualizados.

### 3. Produtos em Destaque / Vitrine (`ProductsSection.tsx`)
- **Objetivo:** Exibição dinâmica da linha de itens.
- **Destaques:** Campo de busca textual em tempo real, pílulas para filtragem por categoria e cards com foto, descrição, etiqueta de preço/sob consulta e botão direto de pedido no WhatsApp.

### 4. Como Comprar (`HowToBuySection.tsx`)
- **Objetivo:** Reduzir atritos na jornada do cliente.
- **Destaques:** Explicação visual em 3 passos numerados e coloridos:
  1. *Escolha o Produto*
  2. *Fale no WhatsApp*
  3. *Combine Retirada ou Entrega*

### 5. Simulador de Personalização (`CustomizationSection.tsx`)
- **Objetivo:** Captar leads interessados em itens personalizados ou corporativos.
- **Destaques:** Card interativo onde o cliente escolhe o tipo de item, quantidade e digita observações. O botão gera e envia a mensagem montada diretamente no WhatsApp da loja.

### 6. Sobre a Loja (`AboutSection.tsx`)
- **Objetivo:** Transmitir autoridade e presença física local.
- **Destaques:** Foto da loja com badge flutuante, descrição institucional destacando o atendimento em Chapadinha - MA e link para a árvore de links oficial.

### 7. Localização e Funcionamento (`LocationSection.tsx`)
- **Objetivo:** Facilitar a visita à loja física.
- **Destaques:** Endereço completo, horários de atendimento da semana, botão de navegação no Google Maps e representação gráfica do mapa com indicador de loja aberta.

### 8. Dúvidas Frequentes / FAQ (`FaqSection.tsx`)
- **Objetivo:** Esclarecer dúvidas recorrentes de clientes.
- **Destaques:** Sistema de *Accordion* interativo tratando temas como encomendas personalizadas, prazos, entregas locais e pedidos corporativos.

### 9. Banner CTA Final (`CtaBannerSection.tsx`)
- **Objetivo:** Chamada de conversão final antes do rodapé.
- **Destaques:** Layout destacado com gradiente de cor vibrante e botão amplo para iniciar atendimento imediato no WhatsApp.

---

## ⚙️ Configuração Centralizada (`src/config/business.config.ts`)

Todas as informações essenciais da empresa estão centralizadas neste arquivo:

- **Endereço:** Rua Prefeito Joaquim Almeida, 387-A, Centro, Chapadinha - MA
- **Telefone WhatsApp:** Configurável no atributo `whatsappPhone`
- **Links Externos:** Google Maps, Instagram e TreeLink
```

eof

---

A documentação do projeto foi criada e salva com sucesso na raiz no arquivo `README.md`.

<FollowUp>
Falta algum detalhe ou ajuste na documentação ou no código do projeto?
</FollowUp>