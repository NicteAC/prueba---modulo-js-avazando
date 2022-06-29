import Animal from "./animal.js";

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Rugir() {
    console.log(rugir);
  }
}
class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Aullar() {
    console.log(aullar);
  }
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Gruñir() {
    console.log(gruñir);
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Sisear() {
    console.log(sisear);
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Chillar() {
    chillar;
  }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
