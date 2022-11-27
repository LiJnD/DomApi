const pokemonContainer = document.querySelector(".pokemon-container");
const pokemonesItems = document.createElement('pokemones');
const templateItems = document.createElement("template-carro").content
const fragment = document.createDocumentFragment();
const spinner = document.querySelector("#spinner");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
let carrito = {}

pokemonContainer.addEventListener('click', e => { agregrarCarrito(e) })

let limit = 11;
let offset = 1;

previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 9;
    removeChildNodes(pokemonContainer);
    Pokemon2Fetch(offset, limit);
  }
});

next.addEventListener("click", () => {
  offset += 9;
  removeChildNodes(pokemonContainer);
  Pokemon2Fetch(offset, limit);
});

//llamando a la api
function PokemonFetch(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      CreadorApi(data);
      spinner.style.display = "none";
    });
}

function Pokemon2Fetch(offset, limit) {
  spinner.style.display = "block";
  for (let i = offset; i <= offset + limit; i++) {
    PokemonFetch(i);
  }
}

function CreadorApi(pokemon) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  flipCard.appendChild(cardContainer);

  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;


  spriteContainer.appendChild(sprite);
  //id
  const number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;
  //nombre
  const name = document.createElement("h4");
  name.classList.add("name");
  name.textContent = pokemon.name;

  //precios
  const precio = document.createElement("h5");
  precio.classList.add("precio");
  precio.textContent = "$25.000";

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(precio);
  //une todos los datos delanteros(card) del pokemon
  const clone = card.cloneNode(true)
  fragment.appendChild(clone)

  const cardBack = document.createElement("div");
  cardBack.classList.add("pokemon-block-back");

  //comprar
  const compra = document.createElement("button");
  compra.classList.add("buttonBuy");
  compra.dataset.id = pokemon.id;
  compra.textContent = "Buy";


  cardBack.appendChild(progressBars(pokemon.stats));
  card.appendChild(compra);

  cardContainer.appendChild(card);
  cardContainer.appendChild(cardBack);
  pokemonContainer.appendChild(flipCard);
}

function progressBars(stats) {
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");

  for (let i = 0; i < 3; i++) {
    const stat = stats[i];

    const statPercent = stat.base_stat / 2 + "%";
    const statContainer = document.createElement("stat-container");
    statContainer.classList.add("stat-container");

    const statName = document.createElement("p");
    statName.textContent = stat.stat.name;

    const progress = document.createElement("div");
    progress.classList.add("progress");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.setAttribute("aria-valuenow", stat.base_stat);
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 200);
    progressBar.style.width = statPercent;

    progressBar.textContent = stat.base_stat;

    progress.appendChild(progressBar);
    statContainer.appendChild(statName);
    statContainer.appendChild(progress);

    statsContainer.appendChild(statContainer);
  }

  return statsContainer;
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
//carito de compra
const agregrarCarrito = e => {
  allCarrito(e.target.parentElement)
}
//llenbarcarrito
const allCarrito = pokemon1 => {

  const productoPokemos = {
    id: pokemon1.querySelector('button').dataset.id,
    name: pokemon1.querySelector('h4').textContent,
    precio: pokemon1.querySelector('h5').textContent,
    cantidad: 1
  }

  carrito[productoPokemos.id] = { ...productoPokemos }
  console.log(carrito)
  mosrarProducto();
}

const mosrarProducto = () => {
  Object.values(carrito).forEach(productoPokemos1 => {
    templateItems.querySelector('th').textContent = productoPokemos1.id;
    templateItems.querySelectorAll('td')[0].textContent = productoPokemos1.name;
    templateItems.querySelectorAll('td')[1].textContent = productoPokemos1.cantidad;
    templateItems.querySelector('spand').textContent = productoPokemos1.precio * productoPokemos1.cantidad;
    templateItems.querySelector('.btn-suma').dataset.id = productoPokemos1.id;
    templateItems.querySelector('.btn-resta').dataset.id = productoPokemos1.id;
    const clone = templateItems.cloneNode(true)
    fragment.appendChild(clone)
  })
  pokemonesItems.appendChild(fragment)
}

pokemonContainer.appendChild(fragment);
Pokemon2Fetch(offset, limit);