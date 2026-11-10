import type { ImageMetadata } from 'astro';

// Fotos reais de serviços feitos, uma por serviço (src/assets/fotos/<slug>.jpg).
// Os originais ficam em fotos/<slug>/ na raiz do repositório e são convertidos
// automaticamente no build (scripts/fotos.mjs). Sem foto, o site mostra um ícone.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-esgoto': 'Técnico da Desentupidora Prime SP desentupindo rede de esgoto com máquina',
  'desentupimento-de-pia': 'Desentupimento de pia de cozinha feito pela Desentupidora Prime SP',
  'desentupimento-de-vaso-sanitario': 'Desentupimento de vaso sanitário feito pela Desentupidora Prime SP',
  'desentupimento-de-ralo': 'Desentupimento de ralo feito pela Desentupidora Prime SP',
  'limpeza-de-caixa-de-gordura': 'Limpeza de caixa de gordura feita pela Desentupidora Prime SP',
  'desentupimento-de-coluna': 'Desentupimento de coluna de esgoto em prédio',
  hidrojateamento: 'Hidrojateamento de tubulação de esgoto',
  'desentupimento-de-tanque': 'Desentupimento de tanque na área de serviço',
};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = arquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  return { src: mod.default, alt: alts[slug] ?? 'Serviço realizado pela Desentupidora Prime SP' };
}

export function temFotos() {
  return Object.keys(arquivos).length > 0;
}
