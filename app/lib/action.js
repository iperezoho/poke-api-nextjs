export default async function FetchPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();

    //CREAR UN FETCH DONDE OBTENGA LAS IMAGENES, PARA VER LO QUE QUIERO DECIR MIRAR CHATGPT

    // console.log('datos:', data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function FetchPokemonInfo() {}

// export default FetchPokemon;
