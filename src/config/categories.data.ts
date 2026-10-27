import { Sparkles, Gift, Package, Coffee, PenTool } from 'lucide-react';

export interface Category {
  id: string;
  title: string;
  icon: typeof Sparkles;
  badge: string;
  description: string;
  image: string;
  message: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "papelaria",
    title: "Papelaria Criativa",
    icon: Sparkles,
    badge: "Mais Procurado",
    description: "Cadernos, planners, canetas fofas, marcadores e itens funcionais que transformam a rotina de estudos e trabalho.",
    image: "https://images.unsplash.com/photo-1585336261026-8f5786396861?auto=format&fit=crop&q=80&w=800",
    message: "Olá! Vim pelo site e gostaria de conhecer as novidades em Papelaria Criativa."
  },
  {
    id: "brindes",
    title: "Brindes & Eventos",
    icon: Gift,
    badge: "Corporativo e Festas",
    description: "Soluções encantadoras para surpreender clientes, colaboradores e convidados em datas especiais e eventos.",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=800",
    message: "Olá! Gostaria de consultar opções de brindes para meu evento/empresa."
  },
  {
    id: "embalagens",
    title: "Embalagens & Caixas",
    icon: Package,
    badge: "Pronta Entrega",
    description: "Sacolas, caixas decoradas, papéis de seda e laços para dar um toque profissional e inesquecível ao seu presente ou produto.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800",
    message: "Olá! Preciso de embalagens e caixas e gostaria de consultar tamanhos e modelos disponíveis."
  },
  {
    id: "canecas",
    title: "Canecas & Copos",
    icon: Coffee,
    badge: "Presente Perfeito",
    description: "Canecas de porcelana, copos térmicos, squeezes e opções prontas ou para personalizar do seu jeito.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800",
    message: "Olá! Gostaria de ver os modelos de canecas e copos disponíveis."
  },
  {
    id: "personalizados",
    title: "Produtos Personalizados",
    icon: PenTool,
    badge: "Exclusividade",
    description: "Itens com nome, logotipo ou frase especial. Transforme suas ideias em produtos exclusivos com orçamento facilitado.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    message: "Olá! Quero tirar uma dúvida sobre criação de um produto personalizado."
  }
];