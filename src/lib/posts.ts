export interface Post {
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  image: string;
  featured: boolean;
  excerpt: string;
  content: string;
}

// In a real app, this would fetch from your .md files
// For now, we'll use the data structure
export const posts: Post[] = [
  {
    title: "SEPULTURA Anuncia Último Álbum de Estúdio 'Celebrating Life Through Death'",
    slug: "sepultura-novo-album",
    category: "Latest News",
    author: "Metal Brasil Staff",
    date: "2025-11-02",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&h=600&fit=crop",
    featured: true,
    excerpt: "A lendária banda brasileira confirma que seu próximo trabalho será o último álbum de estúdio da carreira",
    content: ""
  },
  {
    title: "ANGRA Confirma Turnê Europeia com Setlist Especial de 'Temple of Shadows'",
    slug: "angra-tour-europa",
    category: "Latest News",
    author: "Ricardo Mendes",
    date: "2025-11-01",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
    featured: true,
    excerpt: "Banda paulista celebra 20 anos do álbum conceitual com shows especiais pela Europa",
    content: ""
  },
  {
    title: "KRISIUN Lança Vídeo Brutal para 'Blood of Lions' do Novo EP",
    slug: "krisiun-video-novo",
    category: "Videos",
    author: "Metal Brasil Staff",
    date: "2025-10-31",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    featured: false,
    excerpt: "Trio de death metal lança clipe devastador para faixa título do novo trabalho",
    content: ""
  },
  {
    title: "VIPER Anuncia Show de Retorno com Formação Clássica em São Paulo",
    slug: "viper-show-retorno",
    category: "Latest News",
    author: "Paula Santos",
    date: "2025-10-30",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&h=600&fit=crop",
    featured: false,
    excerpt: "Lendas do heavy metal brasileiro voltam aos palcos depois de 8 anos afastados",
    content: ""
  },
  {
    title: "REVIEW: Claustrofobia - 'Peste' É Uma Pancada Grindcore Sem Precedentes",
    slug: "claustrofobia-review",
    category: "Reviews",
    author: "Fernando Rocha",
    date: "2025-10-29",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
    featured: true,
    excerpt: "Novo álbum da banda paulista redefine os limites do grindcore brasileiro",
    content: ""
  }
];
