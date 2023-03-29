export function SearchCard(props) {
  let { id, title, _embedded } = props;
  let slug = _embedded.self[0].slug;
  let date = _embedded.self[0].date;
  let dateFormat = new Date(date).toLocaleDateString();

  return `
  <article class="post-card">
    <h2>${title}</h2>
    <p>
    <time datetime="">${dateFormat}</time>
      <a href="#/${slug}" data-id="${id}">Ver publicación...</a>
    </p>
  </article>
  `;
}
