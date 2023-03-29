/* Archivo de ayuda */

let postSlug = "rosalia-y-rauw-alejandro-estan-prometidos-y-nos-lo-han-contado-en-el-videoclip-de-beso";

const NAME = "tendenciasdebodas", //malvestida
  DOMAIN = `https://${NAME}.com`,
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  PER_PAGE = 9,
  POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,
  POST = `${API_WP}/posts`,
  CATAGORIES = `${API_WP}/categories`,
  SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`,
  TITULOWEB = "Tendencias de bodas",
  POST_SLUG = `${API_WP}/posts?slug=${postSlug}`;

let page = 1;

export default {
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  PER_PAGE,
  POSTS,
  POST,
  CATAGORIES,
  SEARCH,
  TITULOWEB,
  POST_SLUG,
  page,
};

//  "/wp-json/wp/v2/posts?slug=post-slug"
