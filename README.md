# Vital Desentupidora · site

Site de desentupidora 24h em São Paulo e Grande SP (DDD 11), com foco em SEO local e tráfego do Google Ads.
Feito com [Astro](https://astro.build), gera páginas estáticas, sem animações, e é publicado na Vercel.
Baseado na estrutura do site da Dutra Hidráulica.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Telefone/WhatsApp, nome, domínio, tempo de chegada, GTM/gtag | `src/data/site.ts` |
| Serviços (textos, FAQ, SEO) | `src/data/servicos.ts` |
| Zonas de SP e cidades da Grande SP | `src/data/bairros.ts` |
| Fotos reais | `fotos/<slug-do-serviço>/` (ver `fotos/README.md`) |
| Logo | `src/components/Logo.astro` (provisório), `public/logo.png`, `public/favicon.svg` |
| Cores | topo de `src/styles/global.css` |
| Posts do blog | `src/content/blog/*.md` |

Cada serviço vira `/servicos/<slug>/`, cada zona vira `/desentupidora-na-zona-norte/` (etc.), cada cidade vira `/desentupidora-em-<cidade>/` e cada post vira `/blog/<arquivo>/`. O sitemap é gerado automaticamente.
