import { useEffect, useState } from 'react';

const [pokemons, setPokemons] = useState([])

useEffect(() => {
    async function fetchPoke(){
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      const data = await res.json()
      setPokemons(data.results)
    }
    fetchPoke()
  }, [])

  console.log(pokemons)

return (
    <>
      <div>
        {pokemons.map(pokemon => {
          return(
            <p key={pokemon.name}>
              {pokemon.name}
            </p>
          )
        })}
      </div>
    </>
  )