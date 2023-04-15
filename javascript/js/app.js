const section = document.querySelector("section");

// Crear un elemento DOM
// <article></article>
const article = document.createElement("article");
const article2 = document.createElement("article");

// <article>Nuevo artículo</article>
article.textContent = "Nuevo artículo";
article2.textContent = "Otro artículo";

// Agrega el nuevo elemento a un elemento elemento existente
section.appendChild(article);
section.appendChild(article2);

// Agrega código HTML plano
const nuevoElemento = document.createElement("div");
nuevoElemento.innerHTML = `<h1>Titulo</h1><p>parrafo</p><span>texto</span>`;
section.appendChild(nuevoElemento);

// Crea 2 elementos
const h2 = document.createElement("h2");
h2.textContent = "Soy un H2";
const h3 = document.createElement("h3");
h3.textContent = "Soy un H3";

// Agrega varios elementos a la vez
section.append(h2, h3);

// Crea 2 elementos
const titulo1 = document.createElement("h2");
titulo1.textContent = "Soy el titulo 1";
const titulo2 = document.createElement("h3");
titulo2.textContent = "Soy el titulo 2";

// Arreglo de elementos
const titulos = [titulo1, titulo2];

// Desestructuración de elementos de un arreglo
section.append(...titulos);

// Eliminar un elemento
const primerH2 = document.querySelector("h2");
primerH2.remove();
