// Cidades e bairros atendidos (região do DDD 19).
// Cada item vira uma página /desentupidora-em-<slug>/ com texto exclusivo.
export type Zona = 'Campinas' | 'Região Metropolitana' | 'Piracicaba e Limeira' | 'Circuito das Águas e Mogiana';

export interface Bairro {
  slug: string;
  nome: string;
  zona: Zona;
  // true = bairro de Campinas; false = cidade
  bairroDeCampinas?: boolean;
  // Texto exclusivo da página para não repetir conteúdo entre áreas
  sobre: string;
  vizinhos: string[];
}

// Regiões em foco aparecem destacadas nas listagens
export const zonasPrioritarias: Zona[] = ['Campinas'];
export const ordemZonas: Zona[] = ['Campinas', 'Região Metropolitana', 'Piracicaba e Limeira', 'Circuito das Águas e Mogiana'];

export const bairros: Bairro[] = [
  {
    slug: 'campinas',
    nome: 'Campinas',
    zona: 'Campinas',
    sobre:
      'Campinas tem de tudo: prédios altos no Cambuí e no Centro, casas e sobrados nos bairros residenciais, chácaras em Sousas e Joaquim Egídio e muitos comércios e restaurantes. Atendemos desentupimento de esgoto, pia, vaso, caixa de gordura e coluna de prédio em toda a cidade, 24 horas.',
    vizinhos: ['Valinhos', 'Sumaré', 'Hortolândia', 'Paulínia'],
  },
  {
    slug: 'cambui',
    nome: 'Cambuí',
    zona: 'Campinas',
    bairroDeCampinas: true,
    sobre:
      'O Cambuí concentra prédios residenciais, bares e restaurantes. Os chamados mais comuns são desentupimento de coluna de prédio, limpeza de caixa de gordura em cozinhas comerciais e pia entupida em apartamentos.',
    vizinhos: ['Centro', 'Guanabara', 'Nova Campinas', 'Taquaral'],
  },
  {
    slug: 'barao-geraldo',
    nome: 'Barão Geraldo',
    zona: 'Campinas',
    bairroDeCampinas: true,
    sobre:
      'Barão Geraldo, perto da Unicamp, tem muitas casas divididas em repúblicas e kitnets, além de condomínios. Com muita gente usando o mesmo banheiro e a mesma cozinha, vaso, ralo e caixa de gordura entopem com frequência.',
    vizinhos: ['Cidade Universitária', 'Real Parque', 'Guará', 'Paulínia'],
  },
  {
    slug: 'taquaral',
    nome: 'Taquaral',
    zona: 'Campinas',
    bairroDeCampinas: true,
    sobre:
      'O Taquaral, ao redor da lagoa, tem casas e sobrados mais antigos e prédios novos. Nas casas antigas, raízes e tubulações de manilha são causa comum de esgoto entupido; nos prédios, colunas e pias.',
    vizinhos: ['Cambuí', 'Parque Taquaral', 'Jardim Chapadão', 'Castelo'],
  },
  {
    slug: 'sousas',
    nome: 'Sousas e Joaquim Egídio',
    zona: 'Campinas',
    bairroDeCampinas: true,
    sobre:
      'Sousas e Joaquim Egídio têm chácaras, condomínios fechados e casas grandes com redes de esgoto longas e quintais com bastante terra e folhas. Atendemos desentupimento de esgoto, ralos externos e caixas de inspeção.',
    vizinhos: ['Gramado', 'Jardim Botânico', 'Alphaville Campinas', 'Valinhos'],
  },
  {
    slug: 'ouro-verde',
    nome: 'Ouro Verde',
    zona: 'Campinas',
    bairroDeCampinas: true,
    sobre:
      'A região do Ouro Verde e do Campo Grande é uma das mais populosas de Campinas, com muitas casas, sobrados e comércios de bairro. Atendemos esgoto, pia, vaso e tanque entupidos, a qualquer hora.',
    vizinhos: ['Campo Grande', 'Vida Nova', 'DIC', 'Hortolândia'],
  },
  {
    slug: 'sumare',
    nome: 'Sumaré',
    zona: 'Região Metropolitana',
    sobre:
      'Sumaré tem muitos bairros residenciais e conjuntos habitacionais, além de comércio forte no centro e em Nova Veneza. Os chamados mais comuns são esgoto entupido, vaso sanitário e caixa de gordura.',
    vizinhos: ['Hortolândia', 'Nova Odessa', 'Americana', 'Campinas'],
  },
  {
    slug: 'hortolandia',
    nome: 'Hortolândia',
    zona: 'Região Metropolitana',
    sobre:
      'Hortolândia cresceu rápido, com muitas casas e condomínios novos. Atendemos desentupimento de esgoto, pia, ralo e vaso sanitário em toda a cidade, inclusive de madrugada.',
    vizinhos: ['Sumaré', 'Campinas', 'Monte Mor', 'Paulínia'],
  },
  {
    slug: 'paulinia',
    nome: 'Paulínia',
    zona: 'Região Metropolitana',
    sobre:
      'Paulínia combina bairros residenciais, condomínios e empresas do polo industrial. Atendemos residências, comércios e empresas com desentupimento, limpeza de caixa de gordura e hidrojateamento.',
    vizinhos: ['Campinas', 'Cosmópolis', 'Sumaré', 'Jaguariúna'],
  },
  {
    slug: 'valinhos',
    nome: 'Valinhos',
    zona: 'Região Metropolitana',
    sobre:
      'Valinhos tem muitos condomínios horizontais, chácaras e casas com quintal grande. Redes de esgoto longas e caixas de inspeção com terra e raízes são chamados frequentes por aqui.',
    vizinhos: ['Vinhedo', 'Campinas', 'Sousas', 'Louveira'],
  },
  {
    slug: 'vinhedo',
    nome: 'Vinhedo',
    zona: 'Região Metropolitana',
    sobre:
      'Vinhedo é uma cidade de condomínios residenciais e casas de alto padrão. Fazemos desentupimento com cuidado para preservar pisos e jardins, sem quebra-quebra sempre que possível.',
    vizinhos: ['Valinhos', 'Louveira', 'Campinas'],
  },
  {
    slug: 'indaiatuba',
    nome: 'Indaiatuba',
    zona: 'Região Metropolitana',
    sobre:
      'Indaiatuba tem muitos condomínios fechados, bairros planejados e comércio forte. Atendemos desentupimento de esgoto, pia, vaso e caixa de gordura em casas, prédios e restaurantes.',
    vizinhos: ['Campinas', 'Monte Mor', 'Elias Fausto'],
  },
  {
    slug: 'americana',
    nome: 'Americana',
    zona: 'Região Metropolitana',
    sobre:
      'Americana tem bairros residenciais tradicionais, prédios no centro e muitas empresas. Nas casas mais antigas, tubulações de manilha e raízes costumam causar entupimento de esgoto.',
    vizinhos: ['Santa Bárbara d’Oeste', 'Nova Odessa', 'Sumaré', 'Limeira'],
  },
  {
    slug: 'santa-barbara-doeste',
    nome: 'Santa Bárbara d’Oeste',
    zona: 'Região Metropolitana',
    sobre:
      'Santa Bárbara d’Oeste tem muitos bairros de casas e sobrados. Atendemos esgoto entupido, ralo, pia e tanque, além de limpeza de caixa de gordura em residências e comércios.',
    vizinhos: ['Americana', 'Nova Odessa', 'Piracicaba', 'Sumaré'],
  },
  {
    slug: 'piracicaba',
    nome: 'Piracicaba',
    zona: 'Piracicaba e Limeira',
    sobre:
      'Piracicaba é uma cidade grande, com casas antigas perto do centro e muitos bairros novos. Atendemos desentupimento de esgoto, colunas de prédio, caixa de gordura e hidrojateamento.',
    vizinhos: ['Santa Bárbara d’Oeste', 'Rio Claro', 'Limeira', 'Saltinho'],
  },
  {
    slug: 'limeira',
    nome: 'Limeira',
    zona: 'Piracicaba e Limeira',
    sobre:
      'Limeira tem bairros residenciais, comércio no centro e muitas indústrias. Atendemos residências, comércios e empresas com desentupimento e limpeza de caixa de gordura 24 horas.',
    vizinhos: ['Americana', 'Cordeirópolis', 'Iracemápolis', 'Rio Claro'],
  },
  {
    slug: 'jaguariuna',
    nome: 'Jaguariúna',
    zona: 'Circuito das Águas e Mogiana',
    sobre:
      'Jaguariúna tem condomínios residenciais, chácaras e empresas. Atendemos desentupimento de esgoto, ralos e caixas de inspeção, além de caixa de gordura em comércios.',
    vizinhos: ['Paulínia', 'Pedreira', 'Holambra', 'Santo Antônio de Posse'],
  },
  {
    slug: 'mogi-mirim',
    nome: 'Mogi Mirim',
    zona: 'Circuito das Águas e Mogiana',
    sobre:
      'Mogi Mirim tem muitas casas e sobrados e comércio no centro. Atendemos esgoto, pia, vaso sanitário e ralo entupidos, a qualquer hora do dia ou da noite.',
    vizinhos: ['Mogi Guaçu', 'Itapira', 'Santo Antônio de Posse', 'Holambra'],
  },
];

export function bairroPath(b: Bairro) {
  return `/desentupidora-em-${b.slug}/`;
}

export function bairrosPorZona() {
  return ordemZonas
    .map((zona) => ({ zona, bairros: bairros.filter((b) => b.zona === zona) }))
    .filter((g) => g.bairros.length > 0);
}
