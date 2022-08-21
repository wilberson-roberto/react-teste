import { useEffect, useState } from 'react';

const [pokemons, setPokemons] = useState('')

useEffect(() => {
    async function fetchPoke(){
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      const data = await res.json()
      setPokemons(data.results[0].name)
    }
    fetchPoke()
  }, [])

  return (
    <>
      <div>
        {pokemons}
      </div>
    </>
  )