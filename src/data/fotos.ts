import type { ImageMetadata } from 'astro';

// Fotos reais de serviços feitos, uma por serviço (src/assets/fotos/<slug>.jpg).
// Os originais ficam em fotos/<slug>/ na raiz do repositório e são convertidos
// automaticamente no build (scripts/fotos.mjs). Sem foto, o site mostra um ícone.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-esgoto': 'Máquina de cabo rotativo desentupindo caixa de esgoto',
  'desentupimento-de-pia': 'Desentupimento de pia de cozinha',
  'desentupimento-de-vaso-sanitario': 'Técnico desentupindo vaso sanitário com máquina',
  'desentupimento-de-ralo': 'Técnico desentupindo ralo com máquina de cabo rotativo',
  'limpeza-de-caixa-de-gordura': 'Limpeza de caixa de gordura com mangueira de sucção',
  hidrojateamento: 'Hidrojateamento de tubulação de esgoto',
};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = arquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  return { src: mod.default, alt: alts[slug] ?? 'Serviço de desentupimento' };
}

export function temFotos() {
  return Object.keys(arquivos).length > 0;
}
