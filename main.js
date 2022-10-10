const precio = 10000;

const titulo = document.querySelector("h2");
titulo.style.color = "pink";
titulo.style.fontSize = "30px";

const parrafo = document.querySelector("p");
parrafo.textContent = "Regalo para mis hermanos";

const segundoParrafo = document.querySelector("#segundoParrafo");
segundoParrafo.textContent = "Da el mejor regalo a tus hermanos";
segundoParrafo.style.color = "blue";

const tercerParrafo = document.querySelector("#tercerParrafo");
tercerParrafo.innerHTML = `demuestra tu cariño por solo ${precio} pesos`;

const boton = document.querySelector("#boton");
const color = document.querySelector("#inputColor");
const cantidad = document.querySelector("#inputCantidad");

boton.addEventListener("click", () => {
  colorFinal.style.display = "block";
  colorFinal.style.backgroundColor = color.value;
  cantidadCompra.textContent = `el total de productos comprados es : ${cantidad.value}`;
  precioCompra.textContent = `El precio total de tu compra es : ${
    cantidad.value * precio
  }`;
});
