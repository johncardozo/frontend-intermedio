let y = 5;
try {
  a = y + 1;
  console.log(a);
} catch (error) {
  const h1 = document.getElementById("error");
  h1.textContent = "Hubo un error. Intente de nuevo.";
  console.log(error);
}

try {
  let x = 5;
  b = x + 10;
  console.log(b);
  console.log("Has ganado el premio");
} catch (error) {
  console.log("Hubo un error. Intenta más tarde");
} finally {
  console.log("Se acabó el proceso!");
}
