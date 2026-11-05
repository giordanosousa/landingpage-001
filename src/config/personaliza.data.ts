import { Box, Image, Lightbulb, Gift } from 'lucide-react';

export interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  icon: typeof Box;
}

export interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  whatsappMessage?: string;
}

export interface PersonalizationOption {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface CreationProcess {
  id: string;
  tag: string;
  title: string;
  description: string;
  actionText: string;
  iconType: 'user' | 'file-up';
}

export interface ComboKit {
  id: string;
  title: string;
  items: string;
  description: string;
  image: string;
}

// Passos de Navegação Lateral
export const STEPS: StepItem[] = [
  { id: 'produtos', stepNumber: '01', title: 'Escolha do produto', icon: Box },
  { id: 'opcoes', stepNumber: '02', title: 'Opções de personalização', icon: Image },
  { id: 'processo', stepNumber: '03', title: 'Processo de criação', icon: Lightbulb },
];

export const EXTRA_STEP: StepItem = {
  id: 'kits',
  stepNumber: '',
  title: 'Combine produtos e surpreenda',
  icon: Gift,
};

// Passo 01 - Produtos / Categorias
export const CUSTOM_CATEGORIES: ProductCategory[] = [
  {
    id: 'canecas',
    title: 'Canecas',
    subtitle: 'Para aquecer conexões.',
    image: 'https://res.cloudinary.com/kqdlvfur/image/upload/v1793892781/canecas.png',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre a personalização de canecas.',
  },
  {
    id: 'camisetas',
    title: 'Camisetas',
    subtitle: 'Vista a sua identidade.',
    image: 'https://res.cloudinary.com/kqdlvfur/image/upload/v1793892784/camisetas.png',
    whatsappMessage: 'Olá! Gostaria de orçar camisetas personalizadas.',
  },
  {
    id: 'ecobags',
    title: 'Ecobags',
    subtitle: 'Sua marca por toda parte.',
    image: 'https://res.cloudinary.com/kqdlvfur/image/upload/v1793892781/ecobags.png',
    whatsappMessage: 'Olá! Gostaria de orçar ecobags para minha marca.',
  },
  {
    id: 'garrafas',
    title: 'Garrafas e copos',
    subtitle: 'Ideias que acompanham.',
    image: 'https://res.cloudinary.com/kqdlvfur/image/upload/v1793892781/garrafas-copos.png',
    whatsappMessage: 'Olá! Gostaria de consultar modelos de garrafas e copos.',
  },
  {
    id: 'papelaria',
    title: 'Papelaria e impressos',
    subtitle: 'Impressões que ficam.',
    image: 'https://res.cloudinary.com/kqdlvfur/image/upload/v1793892781/Papelaria-impressos.png',
    whatsappMessage: 'Olá! Quero informações sobre itens de papelaria e impressos.',
  },
  {
    id: 'kits',
    title: 'Kits personalizados',
    subtitle: 'Uma combinação especial.',
    image: 'https://res.cloudinary.com/kqdlvfur/image/upload/v1793892782/kits-personalizados.png',
    whatsappMessage: 'Olá! Gostaria de orçar um kit personalizado.',
  },
];

// Passo 02 - Opções de Personalização
export const PERSONALIZATION_OPTIONS: PersonalizationOption[] = [
  {
    id: 'marca-destaque',
    title: 'Sua marca em destaque',
    description: 'Aplique seu logotipo, uma mensagem ou uma arte exclusiva ao produto.',
    image: 'https://res.cloudinary.com/kqdlvfur/image/upload/v1793892885/referencia-sua-marca.png',
  },
  {
    id: 'cores-estampas',
    title: 'Cores e estampas',
    description: 'Explore cores, ilustrações e combinações alinhadas à sua identidade.',
    image: 'https://res.cloudinary.com/kqdlvfur/image/upload/v1793892881/referencia-cores.png',
  },
  {
    id: 'embalagens-criativas',
    title: 'Embalagens criativas',
    description: 'Valorize a entrega com uma apresentação pensada para a ocasião.',
    image: 'https://res.cloudinary.com/kqdlvfur/image/upload/v1793892884/referencia-impressos.png',
  },
  {
    id: 'impressos-sob-medida',
    title: 'Impressos sob medida',
    description: 'Cartões, tags e materiais gráficos para completar a sua comunicação.',
    image: 'https://res.cloudinary.com/kqdlvfur/image/upload/v1793892886/referencia-identidade.png',
  },
  {
    id: 'combinacoes-exclusivas',
    title: 'Combinações exclusivas',
    description: 'Reúna produtos que fazem sentido para sua marca e seu público.',
    image: 'https://res.cloudinary.com/kqdlvfur/image/upload/v1793892882/referencia-embalagens.png',
  },
  {
    id: 'identidade-detalhe',
    title: 'Identidade em cada detalhe',
    description: 'Do presente ao material de apoio, mantenha tudo na mesma linguagem.',
    image: 'https://res.cloudinary.com/kqdlvfur/image/upload/v1793892880/referencia-combinacoes.png',
  },
];

// Passo 03 - Processo de Criação
export const CREATION_PROCESSES: CreationProcess[] = [
  {
    id: 'criamos-com-voce',
    tag: 'Ainda não tem uma arte?',
    title: 'Criamos com você',
    description: 'Conte seu objetivo, seu público e a ocasião. A gente ajuda a traduzir tudo em uma criação com a sua identidade.',
    actionText: 'Conversar sobre minha ideia',
    iconType: 'user',
  },
  {
    id: 'sua-ideia-forma',
    tag: 'Já sabe o que quer?',
    title: 'Sua ideia ganha forma',
    description: 'Compartilhe sua arte, seu logotipo ou uma referência. Vamos alinhar os detalhes para o seu projeto sair do papel.',
    actionText: 'Quero enviar minha ideia',
    iconType: 'file-up',
  },
];

// Seção Extra - Kits e Combinações
export const COMBO_KITS: ComboKit[] = [
  {
    id: 'boas-vindas',
    title: 'Boas-vindas à equipe',
    items: 'Caneca + caderno + caneta',
    description: 'Um começo com a identidade da sua empresa.',
    image: 'https://res.cloudinary.com/kqdlvfur/image/upload/v1793892789/sugestao-produto4.png',
  },
  {
    id: 'eventos',
    title: 'Eventos que ficam na memória',
    items: 'Ecobag + camiseta',
    description: 'Sua marca presente em cada encontro.',
    image: 'https://res.cloudinary.com/kqdlvfur/image/upload/v1793892790/sugestao-produto2.png',
  },
  {
    id: 'clientes',
    title: 'Presentes para clientes',
    items: 'Caneca + cartão personalizado',
    description: 'Um gesto de cuidado que fortalece conexões.',
    image: 'https://res.cloudinary.com/kqdlvfur/image/upload/v1793892788/sugestao-produto1.png',
  },
  {
    id: 'dia-a-dia',
    title: 'Sua marca no dia a dia',
    items: 'Garrafa + copo personalizado',
    description: 'Praticidade para acompanhar cada rotina.',
    image: 'https://res.cloudinary.com/kqdlvfur/image/upload/v1793892788/sugestao-produto3.png',
  },
];