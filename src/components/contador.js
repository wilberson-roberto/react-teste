import { useEffect, useState } from 'react';

const [valor, setValor] = useState(0)

const add = () => {
    setValor(valor + 1)
  }

  const remove = () => {
    setValor(valor - 1)
  }

  return (
    <>
      <p>Contador</p>
      <p id='number'>{valor}</p>
      <button onClick={add}>Adicionar</button>
      <button onClick={remove}>Diminuir</button>
    </>
  )