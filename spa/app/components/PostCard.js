export function PostCard(props) {
  //console.log(props);
  let { date, id, slug, title, _embedded } = props;
  let dateFormat = new Date(date).toLocaleDateString();
  let urlPoster = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : "app/assets/favicon.png";

  /* Generamos un evento click para capturar el id del post en el localStorage, el evento se disparara
     cuando presionemos un elemento <a> que este dentro de un elemento con la clase post-card*/
  document.addEventListener("click", (e) => {
    if (!e.target.matches(".post-card a")) return false;
    localStorage.setItem("wpPostId", e.target.dataset.id);
  });

  return `
  <article class="post-card">
  <img src="${urlPoster}" alt="${title.rendered}" />
  <h3>${title.rendered}</h3>
  <p>
    <time datetime="">${dateFormat}</time>
    <a href="#/${slug}" data-id="${id}">Ver publicación...</a>
  </p>
</article>
`;
}
