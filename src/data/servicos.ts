import type { IconName } from './icons';

export interface Faq {
  q: string;
  a: string;
}

export interface Servico {
  slug: string;
  nome: string;
  // Palavra-chave principal da página (usada no H1 e no title)
  keyword: string;
  resumo: string;
  metaDescription: string;
  icon: IconName;
  intro: string[];
  sinais: string[];
  comoFazemos: string[];
  faq: Faq[];
  destaque?: boolean;
}

export const servicos: Servico[] = [
  {
    slug: 'desentupimento-de-esgoto',
    nome: 'Desentupimento de Esgoto',
    keyword: 'Desentupimento de esgoto em São Paulo',
    resumo: 'Rede de esgoto, caixas de inspeção e tubulações desentupidas com máquina, sem quebra-quebra.',
    metaDescription:
      'Desentupimento de esgoto 24h em São Paulo e Grande SP. Rede, caixa de inspeção e tubulação. Chegamos em até 20 minutos, com garantia. Chame no WhatsApp.',
    icon: 'pipe',
    destaque: true,
    intro: [
      'Esgoto entupido é emergência: água suja voltando pelo ralo, mau cheiro no quintal e caixa de inspeção transbordando. A Desentupidora Prime SP atende 24 horas, inclusive fins de semana e feriados, em toda a cidade de São Paulo e na Grande SP.',
      'Usamos máquinas de cabo rotativo (molas) e, quando necessário, hidrojateamento para remover gordura, raízes, areia e objetos da rede, sem quebrar piso nem parede sempre que possível.',
    ],
    sinais: [
      'Água voltando pelos ralos ou pelo vaso sanitário',
      'Caixa de inspeção cheia ou transbordando no quintal',
      'Mau cheiro forte de esgoto dentro de casa',
      'Barulho de borbulhas (gorgolejo) quando a água escoa',
      'Vários pontos da casa escoando devagar ao mesmo tempo',
    ],
    comoFazemos: [
      'Localizamos o ponto da obstrução pelas caixas de inspeção',
      'Escolhemos o equipamento certo para o diâmetro e o material da rede',
      'Desobstruímos e testamos o escoamento com água corrente',
      'Orientamos sobre como evitar novos entupimentos',
    ],
    faq: [
      {
        q: 'Vocês desentopem esgoto sem quebrar o piso?',
        a: 'Na grande maioria dos casos, sim. As máquinas alcançam a obstrução por dentro da tubulação, pelas caixas de inspeção. Só indicamos abertura quando há cano quebrado ou afundado, e sempre com o seu aceite antes.',
      },
      {
        q: 'Atendem esgoto entupido de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias da semana, inclusive feriados.',
      },
      {
        q: 'O desentupimento de esgoto tem garantia?',
        a: 'Sim, todo serviço da Desentupidora Prime SP sai com garantia.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-pia',
    nome: 'Desentupimento de Pia',
    keyword: 'Desentupimento de pia em São Paulo',
    resumo: 'Pia de cozinha e de banheiro desentupida, inclusive com gordura acumulada no encanamento.',
    metaDescription:
      'Pia entupida? Desentupimento de pia de cozinha e banheiro 24h em São Paulo e Grande SP. Chegamos em até 20 minutos, com garantia.',
    icon: 'sink',
    destaque: true,
    intro: [
      'A pia da cozinha é campeã de entupimento: gordura, restos de comida e borra de café vão se acumulando no sifão e na tubulação até a água parar de descer.',
      'Desentupimos pia de cozinha, lavatório de banheiro e cuba de área de serviço com equipamento próprio, limpando o sifão e o trecho da tubulação até a caixa de gordura ou de inspeção.',
    ],
    sinais: [
      'Água parada na cuba ou descendo muito devagar',
      'Cheiro ruim saindo do ralo da pia',
      'Água voltando na pia quando outro ponto da casa escoa',
      'Gordura aparente no sifão',
    ],
    comoFazemos: [
      'Verificamos o sifão e a válvula da pia',
      'Desobstruímos a tubulação com máquina de cabo rotativo',
      'Checamos a caixa de gordura, que costuma ser a origem do problema',
      'Testamos o escoamento com água quente e corrente',
    ],
    faq: [
      {
        q: 'Soda cáustica resolve pia entupida?',
        a: 'Não recomendamos. A soda pode endurecer a gordura dentro do cano, danificar a tubulação e causar queimaduras. O mais seguro é a desobstrução mecânica.',
      },
      {
        q: 'Por que a pia da cozinha entope de novo?',
        a: 'Quase sempre por gordura acumulada no cano ou caixa de gordura cheia. Por isso conferimos a caixa de gordura junto com a pia.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-vaso-sanitario',
    nome: 'Desentupimento de Vaso Sanitário',
    keyword: 'Desentupimento de vaso sanitário em São Paulo',
    resumo: 'Vaso que não desce ou transborda desentupido sem precisar retirar a louça na maioria dos casos.',
    metaDescription:
      'Vaso sanitário entupido? Desentupimento 24h em São Paulo e Grande SP, sem quebra-quebra. Chegamos em até 20 minutos, com garantia.',
    icon: 'toilet',
    destaque: true,
    intro: [
      'Vaso sanitário entupido não pode esperar, ainda mais quando é o único banheiro da casa. Papel em excesso, lenço umedecido, absorvente e objetos que caem no vaso são as causas mais comuns.',
      'Desentupimos o vaso e o ramal de esgoto do banheiro com equipamento adequado, sem retirar a louça na maioria dos casos.',
    ],
    sinais: [
      'Água subindo até a borda ao dar descarga',
      'Descarga fraca, que não leva os dejetos',
      'Água do vaso baixando muito devagar',
      'Retorno de água no ralo do box ao dar descarga',
    ],
    comoFazemos: [
      'Avaliamos se a obstrução está no vaso ou no ramal de esgoto',
      'Desobstruímos com o equipamento certo, sem danificar a louça',
      'Testamos várias descargas seguidas',
      'Deixamos o banheiro limpo ao final',
    ],
    faq: [
      {
        q: 'Precisa tirar o vaso do lugar?',
        a: 'Na maioria das vezes não. Só retiramos a louça quando o objeto está preso dentro do vaso e não sai de outro jeito, e sempre avisamos antes.',
      },
      {
        q: 'Caiu um objeto no vaso, vocês tiram?',
        a: 'Sim. Quanto antes chamar, mais fácil retirar o objeto antes que ele desça para a rede de esgoto.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-ralo',
    nome: 'Desentupimento de Ralo',
    keyword: 'Desentupimento de ralo em São Paulo',
    resumo: 'Ralo de box, área de serviço e quintal desentupido, com fim do mau cheiro e da água empoçada.',
    metaDescription:
      'Ralo entupido no box, área de serviço ou quintal? Desentupidora 24h em São Paulo e Grande SP. Chegamos em até 20 minutos, com garantia.',
    icon: 'drain',
    intro: [
      'Cabelo, sabão, areia e folhas vão fechando o ralo aos poucos até a água empoçar no box ou no quintal. Em dia de chuva forte, ralo entupido pode alagar a casa.',
      'Desentupimos ralos de banheiro, área de serviço, varanda e quintal, além da caixa sifonada, que costuma acumular a sujeira de vários ralos.',
    ],
    sinais: [
      'Água empoçada no box durante o banho',
      'Mau cheiro saindo do ralo',
      'Ralo do quintal transbordando na chuva',
      'Água de um ralo voltando em outro',
    ],
    comoFazemos: [
      'Abrimos e limpamos a caixa sifonada',
      'Desobstruímos a tubulação até a rede de esgoto ou de águas pluviais',
      'Testamos o escoamento com bastante água',
      'Indicamos proteção de ralo quando faz sentido',
    ],
    faq: [
      {
        q: 'Por que o ralo do banheiro tem cheiro de esgoto?',
        a: 'Geralmente a caixa sifonada está suja ou sem o fecho hídrico (a água que bloqueia o cheiro). A limpeza costuma resolver.',
      },
    ],
  },
  {
    slug: 'limpeza-de-caixa-de-gordura',
    nome: 'Limpeza de Caixa de Gordura',
    keyword: 'Limpeza de caixa de gordura em São Paulo',
    resumo: 'Caixa de gordura limpa e desobstruída em casas, condomínios, restaurantes e comércios.',
    metaDescription:
      'Limpeza e desentupimento de caixa de gordura em São Paulo e Grande SP, para casas, condomínios e restaurantes. Atendimento 24h, com garantia.',
    icon: 'grease',
    destaque: true,
    intro: [
      'A caixa de gordura segura a gordura da pia antes que ela chegue à rede de esgoto. Quando está cheia, a pia entope, o mau cheiro aparece e a gordura começa a passar para a tubulação.',
      'Fazemos a limpeza completa da caixa de gordura e a desobstrução das tubulações de entrada e saída, em residências, condomínios, bares, restaurantes e cozinhas industriais.',
    ],
    sinais: [
      'Pia da cozinha entupindo com frequência',
      'Cheiro de gordura rançosa perto da caixa',
      'Caixa transbordando no quintal ou na área de serviço',
      'Muito tempo sem limpeza (mais de 6 meses em casas)',
    ],
    comoFazemos: [
      'Retiramos a gordura e os resíduos acumulados',
      'Desentupimos a entrada (pia) e a saída (esgoto) da caixa',
      'Lavamos a caixa e conferimos a tampa',
      'Indicamos a frequência ideal de limpeza para o seu imóvel',
    ],
    faq: [
      {
        q: 'De quanto em quanto tempo limpar a caixa de gordura?',
        a: 'Em casas, geralmente a cada 6 meses. Em restaurantes e cozinhas comerciais, a frequência é bem maior, às vezes mensal. Avaliamos o seu caso na visita.',
      },
      {
        q: 'Atendem restaurantes fora do horário de funcionamento?',
        a: 'Sim. Como atendemos 24 horas, podemos fazer a limpeza à noite ou de madrugada, sem atrapalhar o seu movimento.',
      },
    ],
  },
  {
    slug: 'limpa-fossa',
    nome: 'Limpa Fossa',
    keyword: 'Limpa fossa em São Paulo',
    resumo: 'Esgotamento e limpeza de fossa séptica e sumidouro com mangueira de sucção.',
    metaDescription:
      'Limpa fossa 24h em São Paulo e Grande SP: esgotamento de fossa séptica e sumidouro em casas, chácaras, condomínios e comércios. Atendimento rápido, com garantia.',
    icon: 'tank',
    intro: [
      'Fossa cheia é emergência: o esgoto para de escoar, volta pelos ralos e o mau cheiro toma conta do quintal. Em imóveis sem rede de esgoto, como chácaras, sítios e casas em bairros afastados, a fossa precisa ser esvaziada de tempos em tempos.',
      'Fazemos o esgotamento da fossa séptica e do sumidouro com mangueira de sucção, retirando os resíduos acumulados e deixando a fossa pronta para voltar a funcionar.',
    ],
    sinais: [
      'Esgoto voltando pelos ralos e pelo vaso sanitário',
      'Mau cheiro forte no quintal ou perto da tampa da fossa',
      'Terreno úmido ou com água minando em volta da fossa',
      'Vasos e ralos escoando devagar em toda a casa',
      'Muito tempo sem limpeza (mais de 1 ano)',
    ],
    comoFazemos: [
      'Localizamos e abrimos a tampa da fossa',
      'Fazemos a sucção dos resíduos com mangueira',
      'Conferimos o sumidouro e as tubulações de entrada',
      'Fechamos a fossa e orientamos sobre a próxima limpeza',
    ],
    faq: [
      {
        q: 'De quanto em quanto tempo limpar a fossa?',
        a: 'Depende do tamanho da fossa e de quantas pessoas usam o imóvel. Em casas, geralmente a cada 1 a 2 anos. Avaliamos o seu caso na visita.',
      },
      {
        q: 'Atendem chácaras e sítios?',
        a: 'Sim. Atendemos casas, chácaras, sítios, condomínios e comércios em São Paulo e na Grande SP.',
      },
    ],
  },
  {
    slug: 'hidrojateamento',
    nome: 'Hidrojateamento',
    keyword: 'Hidrojateamento em São Paulo',
    resumo: 'Jato de água em alta pressão para limpar gordura, raízes e incrustações por dentro da tubulação.',
    metaDescription:
      'Hidrojateamento de tubulações de esgoto e gordura em São Paulo e Grande SP. Limpeza completa por dentro do cano. Atendimento 24h, com garantia.',
    icon: 'jet',
    intro: [
      'O hidrojateamento usa água em alta pressão para limpar a tubulação por dentro, removendo gordura, lodo, areia e raízes que a máquina de cabo só consegue furar.',
      'É indicado para redes de esgoto com entupimentos repetidos, caixas e ramais de gordura de restaurantes e tubulações de diâmetro maior.',
    ],
    sinais: [
      'Entupimentos que voltam poucas semanas depois',
      'Tubulação com muita gordura endurecida',
      'Rede com raízes ou areia acumulada',
      'Manutenção preventiva de condomínios e comércios',
    ],
    comoFazemos: [
      'Avaliamos a rede e escolhemos o bico de jateamento adequado',
      'Limpamos a tubulação em toda a extensão',
      'Retiramos os resíduos pelas caixas de inspeção',
      'Testamos o escoamento ao final',
    ],
    faq: [
      {
        q: 'Hidrojateamento danifica o cano?',
        a: 'Não, quando feito com a pressão e o bico corretos para cada tipo de tubulação. Ele limpa sem quebrar e sem produtos químicos.',
      },
    ],
  },
];

export const servicosDestaque = servicos.filter((s) => s.destaque);

export function getServico(slug: string) {
  return servicos.find((s) => s.slug === slug);
}
