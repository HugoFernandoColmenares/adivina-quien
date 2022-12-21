function elementoAleatorio() {

  let imagenSelec;
  let numbers = [];
  let nombres = ['Reno', 'Dulce', 'Regalo', 'Pastel', 'Santa', 'Muerdago', 'Velitas', 'Angelito', 'Oso', 'Girnalda', 'Perrito', 'Pesebre', 'Camapana', 'Cabrita', 'Cerdito', 'Melchor', 'Gaspar', 'Baltazar', 'Pollito', 'Bastón'];

  // Creamos un ciclo que se ejecutará 5 veces (para obtener los números del 1 al 5)
  for (let i = 0; i < 20; i++) {
    // Generamos un número aleatorio entre 0 y 19 (los índices de nuestro arreglo)
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
      let cajita = document.querySelector('.elementos');
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
      title.classList.add('cardTitle');

      switch(numbers[j]){
        case 16:
          let melchorArr = ['img/imagen16.jpg', 'img/imagen21.jpg', 'img/imagen22.jpg'];
          let randomMelchor = Math.floor(Math.random() * (2 + 1));;
          let melchorNames = ['Melchor', 'Arcangel', 'Calcetin'];
          title.textContent = melchorNames[randomMelchor];
          img.src = melchorArr[randomMelchor];
          newDiv.appendChild(title);
          newImgBox.appendChild(img);
          break;
        case 17: 
          let GasparArr = ['img/imagen17.jpg', 'img/imagen23.jpg', 'img/imagen24.jpg'];
          let randomGaspar = Math.floor(Math.random() * (2 + 1));;
          let gasparNames = ['Gaspar', 'Arbolito', 'Santa 2'];
          title.textContent = gasparNames[randomGaspar];
          img.src = GasparArr[randomGaspar];
          newDiv.appendChild(title);
          newImgBox.appendChild(img);
          break;
        case 18:
          let BaltazarArr = ['img/imagen18.jpg', 'img/imagen25.jpg', 'img/imagen26.jpg'];
          let randomBaltazar = Math.floor(Math.random() * (2 + 1));;
          img.src = BaltazarArr[randomBaltazar];
          let baltazarNames = ['Baltazar', 'Serafin', 'Noche Buena'];
          title.textContent = baltazarNames[randomBaltazar];
          newDiv.appendChild(title);
          newImgBox.appendChild(img);
          break;
        default:
          newDiv.appendChild(title);
          newImgBox.appendChild(img);
      }      
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

// Esta es la función que inicia el contador de tiempo regresivo
function startCountdown() {
  // Inicializamos una variable con el valor de 60 segundos (1 minuto)
  let seconds = 60;

  // Utilizamos setInterval para ejecutar una función cada 1 segundo
  let countdown = setInterval(function() {
    // Decrementamos el valor de la variable seconds en 1
    seconds--;

    // Actualizamos el texto del elemento h1 con el valor actual de la variable seconds
    document.getElementById("countdown").textContent = seconds + " segundos restantes";

    // Si la variable seconds llega a 0, detenemos el intervalo y mostramos el modal
    if (seconds == 0) {
      clearInterval(countdown);
      document.getElementById("modal").style.display = "block";
    }
  }, 1000); // 1000 milisegundos = 1 segundo
}
