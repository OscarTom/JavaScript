/* Archivo de ayuda */

const NAME = "tendenciasdebodas", //malvestida
  DOMAIN = `https://${NAME}.com`,
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  POSTS = `${API_WP}/posts?_embed`,
  POST = `${API_WP}/posts`,
  CATAGORIES = `${API_WP}/categories`,
  SEARCH = `${API_WP}/search?_embed&search=`,
  TITULOWEB = "Tendencias de bodas";

export default {
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  POSTS,
  POST,
  CATAGORIES,
  SEARCH,
  TITULOWEB,
};
