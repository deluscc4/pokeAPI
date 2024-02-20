const pokemonListHTML = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const loadLessButton = document.getElementById('loadLessButton');

const limit = 5;
let offset = 0;

function loadPokemonItens(offset, limit) {
    function convertPokemonToLi(pokemon) {
        return `
        <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    
                    <div class="details">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>`
    }

    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
        pokemonListHTML.innerHTML += pokemonList.map(convertPokemonToLi).join('')
     })
     .catch((error) => console.log(error))
}

loadPokemonItens()

loadMoreButton.addEventListener('click', () => {
    loadPokemonItens(offset += limit, limit)
    console.log(offset)
})





