import Link from 'next/link';

import FetchPokemon from '../lib/action';

async function Pokemons() {
  const { results: pokes } = await FetchPokemon();

  // console.log('Pokemons:', pokes);
  return (
    <>
      <p>Pokemon Page </p>

      <ul>
        {pokes.map((poke) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>

      <Link href="/">Atras</Link>
    </>
  );
}

export default Pokemons;
