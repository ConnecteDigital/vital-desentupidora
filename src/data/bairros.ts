// Zonas da cidade de São Paulo e cidades da Grande São Paulo (DDD 11).
// Cada item vira uma página própria, com texto exclusivo:
//   zonas:   /desentupidora-na-zona-norte/, /desentupidora-no-centro-de-sp/ ...
//   cidades: /desentupidora-em-guarulhos/ ...
export type Zona =
  | 'São Paulo (capital)'
  | 'ABC Paulista'
  | 'Região Oeste'
  | 'Região Sudoeste'
  | 'Região Norte'
  | 'Alto Tietê';

export interface Bairro {
  slug: string;
  nome: string;
  // Como o nome aparece depois de "Desentupidora": "na Zona Norte", "em Guarulhos"
  em: string;
  zona: Zona;
  tipo: 'zona' | 'cidade';
  // Texto exclusivo da página para não repetir conteúdo entre áreas
  sobre: string;
  // Zonas: principais bairros. Cidades: cidades vizinhas.
  vizinhos: string[];
}

// Grupos em foco aparecem destacados nas listagens
export const zonasPrioritarias: Zona[] = ['São Paulo (capital)'];
export const ordemZonas: Zona[] = ['São Paulo (capital)', 'ABC Paulista', 'Região Oeste', 'Região Norte', 'Alto Tietê', 'Região Sudoeste'];

export const bairros: Bairro[] = [
  // ---------- Capital ----------
  {
    slug: 'zona-norte', nome: 'Zona Norte', em: 'na Zona Norte', zona: 'São Paulo (capital)', tipo: 'zona',
    sobre:
      'A Zona Norte mistura sobrados antigos, prédios novos e muito comércio de bairro. Nas casas mais antigas de Santana, Casa Verde e Vila Maria são comuns redes de esgoto de manilha com raízes; nos prédios de Santana e Tucuruvi, coluna de esgoto e pia entupida.',
    vizinhos: ['Santana', 'Tucuruvi', 'Casa Verde', 'Vila Maria', 'Vila Guilherme', 'Freguesia do Ó', 'Pirituba', 'Jaçanã', 'Mandaqui', 'Vila Medeiros'],
  },
  {
    slug: 'zona-sul', nome: 'Zona Sul', em: 'na Zona Sul', zona: 'São Paulo (capital)', tipo: 'zona',
    sobre:
      'A Zona Sul é a maior região da capital, com prédios em Moema, Vila Mariana e Brooklin e bairros de casas em Santo Amaro, Jabaquara e Cidade Ademar. Atendemos de caixa de gordura de restaurante até esgoto entupido em casa térrea.',
    vizinhos: ['Moema', 'Vila Mariana', 'Saúde', 'Brooklin', 'Santo Amaro', 'Campo Belo', 'Jabaquara', 'Ipiranga', 'Interlagos', 'Campo Limpo'],
  },
  {
    slug: 'zona-leste', nome: 'Zona Leste', em: 'na Zona Leste', zona: 'São Paulo (capital)', tipo: 'zona',
    sobre:
      'A Zona Leste é a região mais populosa de São Paulo, com muitas casas, sobrados e prédios no Tatuapé, Mooca e Anália Franco. Esgoto entupido, vaso sanitário e caixa de gordura são os chamados mais comuns por aqui.',
    vizinhos: ['Tatuapé', 'Mooca', 'Anália Franco', 'Penha', 'Vila Prudente', 'Carrão', 'Vila Formosa', 'Itaquera', 'São Mateus', 'São Miguel Paulista'],
  },
  {
    slug: 'zona-oeste', nome: 'Zona Oeste', em: 'na Zona Oeste', zona: 'São Paulo (capital)', tipo: 'zona',
    sobre:
      'Na Zona Oeste convivem prédios residenciais, casas reformadas e muitos bares e restaurantes em Pinheiros, Vila Madalena e Lapa. Fazemos limpeza de caixa de gordura fora do horário de funcionamento e desentupimento de colunas em condomínios.',
    vizinhos: ['Pinheiros', 'Vila Madalena', 'Perdizes', 'Lapa', 'Pompeia', 'Butantã', 'Vila Leopoldina', 'Alto de Pinheiros', 'Jaguaré', 'Rio Pequeno'],
  },
  {
    slug: 'centro-de-sp', nome: 'Centro de SP', em: 'no Centro de SP', zona: 'São Paulo (capital)', tipo: 'zona',
    sobre:
      'O Centro concentra prédios antigos, comércio e muitos restaurantes e lanchonetes. Redes de esgoto antigas e caixas de gordura de cozinhas comerciais estão entre os nossos chamados mais frequentes na região central.',
    vizinhos: ['República', 'Sé', 'Bela Vista', 'Consolação', 'Higienópolis', 'Santa Cecília', 'Liberdade', 'Bom Retiro', 'Brás', 'Cambuci'],
  },

  // ---------- ABC Paulista ----------
  {
    slug: 'santo-andre', nome: 'Santo André', em: 'em Santo André', zona: 'ABC Paulista', tipo: 'cidade',
    sobre:
      'Santo André tem prédios no centro e no Jardim, casas e sobrados nos bairros residenciais e muito comércio. Atendemos desentupimento de esgoto, pia, vaso e caixa de gordura em toda a cidade.',
    vizinhos: ['São Bernardo do Campo', 'São Caetano do Sul', 'Mauá'],
  },
  {
    slug: 'sao-bernardo-do-campo', nome: 'São Bernardo do Campo', em: 'em São Bernardo do Campo', zona: 'ABC Paulista', tipo: 'cidade',
    sobre:
      'São Bernardo do Campo reúne bairros residenciais, condomínios e muitas empresas. Atendemos residências, condomínios e indústrias com desentupimento e hidrojateamento, inclusive de madrugada.',
    vizinhos: ['Santo André', 'Diadema', 'São Caetano do Sul'],
  },
  {
    slug: 'sao-caetano-do-sul', nome: 'São Caetano do Sul', em: 'em São Caetano do Sul', zona: 'ABC Paulista', tipo: 'cidade',
    sobre:
      'São Caetano do Sul é uma cidade compacta e bem verticalizada, com muitos prédios residenciais. Os chamados mais comuns são pia de apartamento, vaso sanitário e caixa de gordura de condomínio.',
    vizinhos: ['Santo André', 'São Bernardo do Campo', 'Zona Sul de SP'],
  },
  {
    slug: 'diadema', nome: 'Diadema', em: 'em Diadema', zona: 'ABC Paulista', tipo: 'cidade',
    sobre:
      'Diadema tem bairros densos de casas e sobrados e muitas indústrias. Atendemos esgoto, vaso sanitário, pia e ralo entupidos, além de caixa de gordura em comércios e empresas.',
    vizinhos: ['São Bernardo do Campo', 'Zona Sul de SP', 'Santo André'],
  },
  {
    slug: 'maua', nome: 'Mauá', em: 'em Mauá', zona: 'ABC Paulista', tipo: 'cidade',
    sobre:
      'Mauá tem muitos bairros residenciais de casas e conjuntos habitacionais. Atendemos desentupimento de esgoto, pia, vaso e ralo 24 horas, com chegada rápida.',
    vizinhos: ['Santo André', 'Ribeirão Pires', 'Zona Leste de SP'],
  },
  {
    slug: 'ribeirao-pires', nome: 'Ribeirão Pires', em: 'em Ribeirão Pires', zona: 'ABC Paulista', tipo: 'cidade',
    sobre:
      'Ribeirão Pires tem casas com quintal, chácaras e ruas de ladeira. Folhas, terra e raízes nas caixas de inspeção são causas frequentes de esgoto entupido por aqui.',
    vizinhos: ['Mauá', 'Rio Grande da Serra', 'Santo André'],
  },

  // ---------- Região Oeste ----------
  {
    slug: 'osasco', nome: 'Osasco', em: 'em Osasco', zona: 'Região Oeste', tipo: 'cidade',
    sobre:
      'Osasco tem um centro comercial forte, prédios novos e bairros grandes de casas. Atendemos desentupimento de esgoto, caixa de gordura e hidrojateamento em toda a cidade.',
    vizinhos: ['Carapicuíba', 'Barueri', 'Zona Oeste de SP'],
  },
  {
    slug: 'barueri', nome: 'Barueri', em: 'em Barueri', zona: 'Região Oeste', tipo: 'cidade',
    sobre:
      'Barueri reúne condomínios de Alphaville, prédios comerciais e bairros residenciais. Atendemos condomínios, empresas e residências com desentupimento e limpeza de caixa de gordura.',
    vizinhos: ['Osasco', 'Santana de Parnaíba', 'Carapicuíba', 'Jandira'],
  },
  {
    slug: 'carapicuiba', nome: 'Carapicuíba', em: 'em Carapicuíba', zona: 'Região Oeste', tipo: 'cidade',
    sobre:
      'Carapicuíba tem muitos bairros de casas, sobrados e conjuntos habitacionais. Esgoto entupido, vaso sanitário e pia de cozinha são os chamados mais comuns.',
    vizinhos: ['Osasco', 'Barueri', 'Cotia', 'Jandira'],
  },
  {
    slug: 'santana-de-parnaiba', nome: 'Santana de Parnaíba', em: 'em Santana de Parnaíba', zona: 'Região Oeste', tipo: 'cidade',
    sobre:
      'Santana de Parnaíba tem condomínios fechados, casas de alto padrão e o centro histórico. Fazemos desentupimento com cuidado para preservar pisos e jardins, sem quebra-quebra sempre que possível.',
    vizinhos: ['Barueri', 'Cajamar', 'Pirapora do Bom Jesus'],
  },
  {
    slug: 'cotia', nome: 'Cotia', em: 'em Cotia', zona: 'Região Oeste', tipo: 'cidade',
    sobre:
      'Cotia tem muitos condomínios horizontais, chácaras e bairros residenciais ao longo da Raposo Tavares. Redes de esgoto longas e caixas de inspeção com terra e raízes são chamados frequentes.',
    vizinhos: ['Carapicuíba', 'Embu das Artes', 'Vargem Grande Paulista', 'Itapevi'],
  },
  {
    slug: 'itapevi', nome: 'Itapevi', em: 'em Itapevi', zona: 'Região Oeste', tipo: 'cidade',
    sobre:
      'Itapevi cresceu com muitos bairros de casas e condomínios novos. Atendemos esgoto, pia, ralo e vaso entupidos a qualquer hora do dia ou da noite.',
    vizinhos: ['Jandira', 'Barueri', 'Cotia'],
  },
  {
    slug: 'jandira', nome: 'Jandira', em: 'em Jandira', zona: 'Região Oeste', tipo: 'cidade',
    sobre:
      'Jandira é uma cidade residencial, com muitas casas e sobrados. Atendemos desentupimento de esgoto, pia, ralo e caixa de gordura com chegada rápida.',
    vizinhos: ['Barueri', 'Itapevi', 'Carapicuíba'],
  },

  // ---------- Região Norte ----------
  {
    slug: 'guarulhos', nome: 'Guarulhos', em: 'em Guarulhos', zona: 'Região Norte', tipo: 'cidade',
    sobre:
      'Guarulhos é a segunda maior cidade do estado, com prédios no centro e no Macedo, bairros grandes de casas e muitas empresas perto do aeroporto. Atendemos residências, condomínios e empresas 24 horas.',
    vizinhos: ['Zona Norte de SP', 'Zona Leste de SP', 'Arujá', 'Mairiporã'],
  },
  {
    slug: 'caieiras', nome: 'Caieiras', em: 'em Caieiras', zona: 'Região Norte', tipo: 'cidade',
    sobre:
      'Caieiras tem bairros residenciais tranquilos, casas com quintal e condomínios. Atendemos esgoto e ralos entupidos, além de caixas de inspeção com terra e folhas.',
    vizinhos: ['Franco da Rocha', 'Mairiporã', 'Cajamar'],
  },
  {
    slug: 'franco-da-rocha', nome: 'Franco da Rocha', em: 'em Franco da Rocha', zona: 'Região Norte', tipo: 'cidade',
    sobre:
      'Franco da Rocha tem muitos bairros de casas e comércio no centro. Atendemos desentupimento de esgoto, pia, vaso e ralo, a qualquer hora.',
    vizinhos: ['Caieiras', 'Francisco Morato', 'Mairiporã'],
  },
  {
    slug: 'francisco-morato', nome: 'Francisco Morato', em: 'em Francisco Morato', zona: 'Região Norte', tipo: 'cidade',
    sobre:
      'Francisco Morato é uma cidade densa, com muitas casas em ruas de ladeira. Atendemos esgoto entupido, vaso sanitário e ralo com equipamento próprio, sem quebra-quebra sempre que possível.',
    vizinhos: ['Franco da Rocha', 'Caieiras'],
  },
  {
    slug: 'mairipora', nome: 'Mairiporã', em: 'em Mairiporã', zona: 'Região Norte', tipo: 'cidade',
    sobre:
      'Mairiporã tem chácaras, condomínios na serra e casas com quintal grande. Redes de esgoto longas e caixas de inspeção com raízes são chamados frequentes por aqui.',
    vizinhos: ['Caieiras', 'Franco da Rocha', 'Guarulhos', 'Zona Norte de SP'],
  },
  {
    slug: 'cajamar', nome: 'Cajamar', em: 'em Cajamar', zona: 'Região Norte', tipo: 'cidade',
    sobre:
      'Cajamar combina bairros residenciais e muitos centros de distribuição e empresas. Atendemos residências e empresas com desentupimento, caixa de gordura e hidrojateamento.',
    vizinhos: ['Caieiras', 'Santana de Parnaíba', 'Franco da Rocha'],
  },

  // ---------- Alto Tietê ----------
  {
    slug: 'mogi-das-cruzes', nome: 'Mogi das Cruzes', em: 'em Mogi das Cruzes', zona: 'Alto Tietê', tipo: 'cidade',
    sobre:
      'Mogi das Cruzes é a maior cidade do Alto Tietê, com prédios no centro, bairros de casas e chácaras. Atendemos desentupimento de esgoto, pia, vaso e caixa de gordura em toda a cidade.',
    vizinhos: ['Suzano', 'Arujá', 'Biritiba Mirim'],
  },
  {
    slug: 'suzano', nome: 'Suzano', em: 'em Suzano', zona: 'Alto Tietê', tipo: 'cidade',
    sobre:
      'Suzano tem bairros residenciais, comércio forte e indústrias. Atendemos esgoto, pia, vaso e ralo entupidos, além de limpeza de caixa de gordura em comércios.',
    vizinhos: ['Mogi das Cruzes', 'Poá', 'Itaquaquecetuba', 'Ferraz de Vasconcelos'],
  },
  {
    slug: 'itaquaquecetuba', nome: 'Itaquaquecetuba', em: 'em Itaquaquecetuba', zona: 'Alto Tietê', tipo: 'cidade',
    sobre:
      'Itaquaquecetuba é uma cidade populosa, com muitas casas e sobrados. Esgoto entupido, vaso sanitário e pia de cozinha são os chamados mais comuns.',
    vizinhos: ['Poá', 'Suzano', 'Arujá', 'Guarulhos'],
  },
  {
    slug: 'ferraz-de-vasconcelos', nome: 'Ferraz de Vasconcelos', em: 'em Ferraz de Vasconcelos', zona: 'Alto Tietê', tipo: 'cidade',
    sobre:
      'Ferraz de Vasconcelos é uma cidade residencial colada à Zona Leste. Atendemos desentupimento de esgoto, pia, ralo e caixa de gordura 24 horas.',
    vizinhos: ['Poá', 'Suzano', 'Zona Leste de SP'],
  },
  {
    slug: 'poa', nome: 'Poá', em: 'em Poá', zona: 'Alto Tietê', tipo: 'cidade',
    sobre:
      'Poá é uma cidade pequena e residencial, com casas e comércio no centro. Atendemos vaso, pia, ralo e esgoto entupidos com chegada rápida.',
    vizinhos: ['Ferraz de Vasconcelos', 'Suzano', 'Itaquaquecetuba'],
  },
  {
    slug: 'aruja', nome: 'Arujá', em: 'em Arujá', zona: 'Alto Tietê', tipo: 'cidade',
    sobre:
      'Arujá tem muitos condomínios residenciais e chácaras. Fazemos desentupimento de redes de esgoto longas e caixas de inspeção, preservando pisos e jardins sempre que possível.',
    vizinhos: ['Guarulhos', 'Itaquaquecetuba', 'Mogi das Cruzes', 'Santa Isabel'],
  },

  // ---------- Região Sudoeste ----------
  {
    slug: 'taboao-da-serra', nome: 'Taboão da Serra', em: 'em Taboão da Serra', zona: 'Região Sudoeste', tipo: 'cidade',
    sobre:
      'Taboão da Serra é uma cidade densa, com muitos prédios e casas, colada à Zona Sul e à Zona Oeste da capital. Atendemos pia, vaso, ralo e esgoto entupidos.',
    vizinhos: ['Embu das Artes', 'Zona Sul de SP', 'Zona Oeste de SP'],
  },
  {
    slug: 'embu-das-artes', nome: 'Embu das Artes', em: 'em Embu das Artes', zona: 'Região Sudoeste', tipo: 'cidade',
    sobre:
      'Embu das Artes tem o centro turístico, bairros residenciais e muitas empresas às margens da Régis Bittencourt. Atendemos residências, restaurantes e empresas 24 horas.',
    vizinhos: ['Taboão da Serra', 'Itapecerica da Serra', 'Cotia'],
  },
  {
    slug: 'itapecerica-da-serra', nome: 'Itapecerica da Serra', em: 'em Itapecerica da Serra', zona: 'Região Sudoeste', tipo: 'cidade',
    sobre:
      'Itapecerica da Serra tem bairros residenciais, chácaras e condomínios. Atendemos desentupimento de esgoto, caixas de inspeção e ralos externos.',
    vizinhos: ['Embu das Artes', 'Embu-Guaçu', 'Zona Sul de SP'],
  },
];

export function bairroPath(b: Bairro) {
  const prep = b.em.split(' ')[0]; // na / no / em
  return `/desentupidora-${prep}-${b.slug}/`;
}

export function bairrosPorZona() {
  return ordemZonas
    .map((zona) => ({ zona, bairros: bairros.filter((b) => b.zona === zona) }))
    .filter((g) => g.bairros.length > 0);
}
