export function PostCard(props) {
  //console.log(props);
  let { date, slug, title, _embedded } = props;
  let dateFormat = new Date(date).toLocaleDateString();
  let urlPoster = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : "app/assets/favicon.png";
  return `
  <article class="post-card">
  <img src="${urlPoster}" alt="${title.rendered}" />
  <h3>${title.rendered}</h3>
  <p>
    <time datetime="">${dateFormat}</time>
    <a href="#/${slug}">Ver publicación...</a>
  </p>
</article>
`;
}
