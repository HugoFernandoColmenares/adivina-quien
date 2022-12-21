function elementoAleatorio() {

  let imagenSelec;
  let numbers = [];
  let nombres = ['Reno', 'Dulce', 'Regalo', 'Pastel', 'Santa', 'Muerdago', 'Velitas', 'Angelito', 'Oso', 'Girnalda', 'Perrito', 'Pesebre', 'Camapana', 'Cabrita', 'Cerdito', 'Melchor', 'Gaspar', 'Baltazar', 'Pollito', 'Bastón'];

  // Creamos un ciclo que se ejecutará 5 veces (para obtener los números del 1 al 5)
  for (let i = 0; i < 20; i++) {
    // Generamos un número aleatorio entre 0 y 4 (los índices de nuestro arreglo)
    let randomIndex = Math.floor(Math.random() * (i + 1));

    // Insertamos el número en el arreglo en la posición aleatoria generada
    numbers[i] = numbers[randomIndex];
    numbers[randomIndex] = i + 1;
  }

  for (i = 0; i < 4; i++) {

    let varCiclo = i + 1;
    let controlCiclo = 5 * varCiclo;
    let inicioCiclo = controlCiclo - 5;
    let newContainer = document.createElement("div");
    newContainer.classList.add('container');

    for (let j = inicioCiclo; j < controlCiclo; j++) {
      let cajita = document.querySelector('.box');
      let newDiv = document.createElement("div");
      let newImgBox = document.createElement('div');
      let img = document.createElement("img");
      let title = document.createElement("h3");

      imagenSelec = 'img/imagen' + (numbers[j]) + '.jpg'
      let numArr = numbers[j] - 1;

      newDiv.classList.add('card');
      newImgBox.classList.add('imgBox');
      img.src = imagenSelec;
      title.textContent = nombres[numArr];

      // Añadimos el elemento al contenedor
      cajita.appendChild(newContainer);
      newContainer.appendChild(newDiv);
      newDiv.appendChild(newImgBox);
      newDiv.appendChild(title);
      newImgBox.appendChild(img);
    }
  }

  // Get all the cards
  var cards = document.querySelectorAll(".card");

  // Add a click event listener to each card
  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      // Toggle the "gray" class on the card
      card.classList.toggle("gray");
    });
  });

}
