import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/especies.js";
import Animales from "./consulta.js";


const creature = document.getElementById("animal");
const previewCreature = document.getElementById("preview");
let creatureFind;

creature.addEventListener("change", async () => {
  const creatureSelected = creature.value;
  const { animales } = await Animales.getData();
  creatureFind = animales.find((a) => a.name == creatureSelected);
  previewCreature.setAttribute("src", `./assets/imgs/${creatureFind.imagen}`);
});
let beast = [];
document.getElementById("btnRegistrar").addEventListener("click", () => {
  let nombre = document.getElementById("animal");
  let edad = document.getElementById("edad");
  let comentarios = document.getElementById("comentarios");

  let newAnimal;

  if (nombre.value === "Leon") {
    newAnimal = new Leon(
      nombre.value,
      edad.value,
      creatureFind.imagen,
      comentarios.value,
      creatureFind.sonido,
     
    );
  } else if (nombre.value === "Lobo") {
    newAnimal = new Lobo(
      nombre.value,
      edad.value,
      creatureFind.imagen,
      comentarios.value,
      creatureFind.sonido
    );
  } else if (nombre.value === "Oso") {
    newAnimal = new Oso(
      nombre.value,
      edad.value,
      creatureFind.imagen,
      comentarios.value,
      creatureFind.sonido
    );
  } else if (nombre.value === "Serpiente") {
    newAnimal = new Serpiente(
      nombre.value,
      edad.value,
      creatureFind.imagen,
      comentarios.value,
      creatureFind.sonido
    );
  } else if (nombre.value === "Aguila") {
    newAnimal = new Aguila(
      nombre.value,
      edad.value,
      creatureFind.imagen,
      comentarios.value,
      creatureFind.sonido
    );
  }
  if (nombre.value && edad.value && comentarios.value) {
    beast.push(newAnimal);
    nombre.selectedIndex = 0;
    edad.selectedIndex = 0;
    comentarios.value = "";
    previewCreature.setAttribute("src", ``);
    insertCard()
    
  } else {
    alert("Debe llenar todos los campos del formulario")
  }
});

const insertCard = () => {
  const animalesTemplate = document.getElementById("Animales");
  animalesTemplate.innerHTML = "";
  beast.forEach((a, i) => {
    animalesTemplate.innerHTML += `
    <div class="mx-3">
      <div class="card bg-dark text-white">
        <img src="./assets/imgs/${a.getImg()}" 
        class="card-img-top" alt="..." height="150"
        data-toggle="modal" data-target="#exampleModal"
        onclick="animalDetail(${i})">
        <div>
          <button  class="btn btn-secondary w-90">
           <img src="./assets/imgs/audio.svg" class="card-img-top" alt="..."  height="20">
        </button>
       </div>
      </div>
    </div>
    `;
  });
};
window.animalDetail = (i) => {
  const animalejo = beast[i];
  console.log(animalejo)
  console.log(i)
  document.getElementsByClassName("modal-body")[0].innerHTML = `
  <div class="px-3 pb-2">
    <div class="card text-white">
      <img src="assets/imgs/${animalejo.getImg()}" data-toggle="modal" data-target="#exampleModal" class="card-img-top">
      <div class="card-body bg-dark">
        <h4 class="card-title">${animalejo.getNombre()}</h4>
        <hr class="w-50 mx-auto">
        <h6 class="card-text">Edad: ${animalejo.getEdad()}</h6>
        <h6 class="card-text">Comentarios: ${animalejo.getComentarios()}</h6>
      </div>
    </div>
  </div>
  `
};