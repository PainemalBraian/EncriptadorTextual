//Selección de Elementos
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".txtEncriptador");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const encriptadorContenedor = document.querySelector(".mascota-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
let perrito = document.getElementById("perrito");

//Boton de Encriptar
btnEncriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let texto = txtEncriptar.value;
  let txt = texto
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

  if (texto == "") {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = "El texto está vacio";
    muñeco.src = "/EncriptadorAlura/Imagenes/Perrito1.jpeg";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else if (texto !== txt) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = "No debe tener acentos ni caracteres especiales";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else if (texto !== texto.toLowerCase()) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = "El texto debe ser todo en minúscula";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else {
    texto = texto.replace(/e/gm, "enter");
    texto = texto.replace(/i/gm, "imes");
    texto = texto.replace(/a/gm, "ai");
    texto = texto.replace(/o/gm, "ober");
    texto = texto.replace(/u/gm, "ufat");

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    encriptadorContenedor.remove();
  }
});

//Boton de Desencriptar
btnDesencriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let texto = txtEncriptar.value;
  let txt = texto
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

  if (texto == "") {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = "El campo de texto no debe estar vacio";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else if (texto !== txt) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = "No debe tener acentos ni caracteres especiales";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else if (texto !== texto.toLowerCase()) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = "El texto debe ser todo en minúscula";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else {
    texto = texto.replace(/enter/gm, "e");
    texto = texto.replace(/imes/gm, "i");
    texto = texto.replace(/ai/gm, "a");
    texto = texto.replace(/ober/gm, "o");
    texto = texto.replace(/ufat/gm, "u");

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    encriptadorContenedor.remove();
    //perrito.src = "";
  }
});

//Boton de Copiar
btnCopiar.addEventListener("click", (e) => {
  e.preventDefault();
  let copiar = respuesta;
  copiar.select();
  document.execCommand("copy");
});
