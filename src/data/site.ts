// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.

// ⚠️ PROVISÓRIO: trocar pelo WhatsApp/telefone real da Vital.
// Formato: 55 + DDD + número, só dígitos
const PHONE_DIGITS = '5519900000000';

export const site = {
  name: 'Vital Desentupidora',
  // ⚠️ PROVISÓRIO: confirmar o domínio
  url: 'https://www.vitaldesentupidora.com.br',
  city: 'Campinas',
  region: 'Campinas e região',
  state: 'SP',
  phoneDigits: PHONE_DIGITS,
  // Exibição: (19) 90000-0000
  phoneDisplay: `(${PHONE_DIGITS.slice(2, 4)}) ${PHONE_DIGITS.slice(4, 9)}-${PHONE_DIGITS.slice(9)}`,
  tel: `tel:+${PHONE_DIGITS}`,
  // ⚠️ PROVISÓRIO: confirmar o tempo de chegada com o cliente
  arrivalMinutes: 30,
  description:
    'Desentupidora 24 horas em Campinas e região. Desentupimento de esgoto, pia, vaso sanitário, ralo, caixa de gordura e coluna de prédio. Chegamos em até 30 minutos, com garantia.',
};

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Vital Desentupidora e preciso de um desentupimento.';

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${site.phoneDigits}&text=${encodeURIComponent(message)}`;
}

// Tag do Google (gtag.js), ex.: 'AW-123456789' ou 'G-XXXXXXX'. Vazio = não instala.
export const googleTagId = '';

// Contêiner do Google Tag Manager, ex.: 'GTM-XXXXXXX'. Vazio = não instala.
export const gtmId = '';
