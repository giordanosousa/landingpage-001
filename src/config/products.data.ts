export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  tag: string;
  image: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Planner Anual & Bloco de Anotações Criativo",
    category: "papelaria",
    price: "Sob Consulta",
    tag: "Papelaria",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600",
    description: "Design funcional para organização diária com acabamento premium e páginas personalizáveis."
  },
  {
    id: "p2",
    name: "Caneca de Porcelana Personalizada",
    category: "canecas",
    price: "A partir de R$ 35,00",
    tag: "Personalizados",
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&q=80&w=600",
    description: "Estampa de alta qualidade e durabilidade. Opções para fotos, frases, profissões ou logotipo."
  },
  {
    id: "p3",
    name: "Kit de Embalagens Elegantes para Presente",
    category: "embalagens",
    price: "Sob Consulta",
    tag: "Embalagens",
    image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&q=80&w=600",
    description: "Conjunto de caixas e sacolas com acabamento refinado para valorizar qualquer lembrança."
  },
  {
    id: "p4",
    name: "Copo Térmico Personalizado com Nome",
    category: "canecas",
    price: "Consulte modelos",
    tag: "Destaque",
    image: "https://images.unsplash.com/photo-1570831739435-660143a4e5dc?auto=format&fit=crop&q=80&w=600",
    description: "Mantenha sua bebida na temperatura ideal com estilo e gravação personalizada."
  },
  {
    id: "p5",
    name: "Kit Brindes Corporativos (Bloco + Caneta + Chaveiro)",
    category: "brindes",
    price: "Orçamento Sob Medida",
    tag: "Empresarial",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    description: "Ideal para eventos, datas comemorativas, recepção de colaboradores ou mimos para clientes."
  },
  {
    id: "p6",
    name: "Kit Canetas Gel Pastel & Marcadores de Texto",
    category: "papelaria",
    price: "Disponível na Loja",
    tag: "Mais Vendido",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600",
    description: "Escrita macia, cores vibrantes e modelos colecionáveis super fofos para seu estojo."
  }
];