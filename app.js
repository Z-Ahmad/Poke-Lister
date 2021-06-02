// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

var numPokemon = Math.floor(
  window.prompt("How many pokemon do you want to see? (up to 898)")
);

if (numPokemon > 898) {
  numPokemon = 898;
}
console.log(numPokemon);
const container = document.querySelector("#container");

for (let i = 1; i <= numPokemon; i++) {
  const pokemon = document.createElement("div"); //create pokemon element
  pokemon.classList.add("pokemon"); //add class for css styling
  const label = document.createElement("span"); //label for pokemon #
  label.innerText = `#${i}`;
  const newImg = document.createElement("img"); //create image element for sprite
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  pokemon.appendChild(newImg); //add image and label to pokemon element
  pokemon.appendChild(label);
  container.append(pokemon); //put pokemon element into the container
}
