/**
 * Configuración del chat → PBO-AssistantIA (chat propio / embed NodeIA-ServidorIA).
 * Completá iframeUrl cuando tengáis la URL oficial del widget; podés pasar emp_id u otros query params.
 */
window.AMO_PBO_CHAT_CONFIG = {
  /** Embed del chat de Adoro Meus Clientes en ServidorIA */
  iframeUrl: 'https://servidoria.syspboia.com/public/embed/chat/index.html',

  /** Se añaden como ?clave=valor a iframeUrl */
  iframeParams: {
    emp_id: '98',
    empresa_nombre: 'Adoro Meus Clientes',
    empresa_web: 'https://adoromeusclientes.com.br',
  },

  /** Solo cambia las etiquetas del chat. La respuesta sigue el idioma del visitante. */
  localeParam: 'lang',
  syncLocaleFromPage: true,
};
