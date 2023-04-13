// Obtiene el elemento
const titulo = document.getElementById("titulo");
const link = document.getElementById("link");

// Modifica el texto del elemento
titulo.textContent = "Frontend Avanzado";

// Modifica el valor de un atributo de un elemento
link.href = "https://www.amazon.com";

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

// Obtiene el valor de un atributo
const srcImg1 = img1.getAttribute("src");
console.log(srcImg1);
// Modifica el atributo de un elemento
img2.setAttribute("src", srcImg1);
