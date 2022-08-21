const array = [
    {id: 1, name: 'Wilberson Roberto', job: 'Developer'},
    {id: 2, name: 'Italo Cezar', job: 'Gamer'}
  ]

  return (
    <>
      <div>
        {array.map(pessoa => {
          return(
            <p key={pessoa.name}>
              {pessoa.name}
            </p>
          )
        })}
      </div>
    </>
  )