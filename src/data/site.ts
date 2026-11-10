// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.

// WhatsApp e telefone. Formato: 55 + DDD + número, só dígitos
const PHONE_DIGITS = '551148585822';

// (11) 4858-5822 para fixo, (11) 98765-4321 para celular
function formatPhone(d: string) {
  const ddd = d.slice(2, 4);
  const num = d.slice(4);
  const split = num.length - 4;
  return `(${ddd}) ${num.slice(0, split)}-${num.slice(split)}`;
}

export const site = {
  name: 'Desentupidora Prime SP',
  // Nome curto, usado no fim dos títulos das páginas
  shortName: 'Prime SP',
  // ⚠️ PROVISÓRIO: confirmar o domínio
  url: 'https://www.desentupidoraprimesp.com.br',
  city: 'São Paulo',
  region: 'São Paulo e Grande SP',
  state: 'SP',
  phoneDigits: PHONE_DIGITS,
  phoneDisplay: formatPhone(PHONE_DIGITS),
  tel: `tel:+${PHONE_DIGITS}`,
  // ⚠️ PROVISÓRIO: confirmar o tempo de chegada com o cliente
  arrivalMinutes: 30,
  description:
    'Desentupidora 24 horas em São Paulo e Grande SP. Desentupimento de esgoto, pia, vaso sanitário, ralo, caixa de gordura e coluna de prédio. Chegamos em até 30 minutos, com garantia.',
};

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Desentupidora Prime SP e preciso de um desentupimento.';

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${site.phoneDigits}&text=${encodeURIComponent(message)}`;
}

// Tag do Google (gtag.js), ex.: 'AW-123456789' ou 'G-XXXXXXX'. Vazio = não instala.
export const googleTagId = '';

// Contêiner do Google Tag Manager, ex.: 'GTM-XXXXXXX'. Vazio = não instala.
export const gtmId = '';
