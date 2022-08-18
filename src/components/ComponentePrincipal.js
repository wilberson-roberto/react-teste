import Card from './Card'

const ComponentePrincipal = () => {
    return (
      <main className='ComponentePrincipal'>
        Conteúdo Principal

        <div>
            <Card conteudo='Alguma Coisa'/>
            <Card conteudo='Outra coisa'/>
        </div>

        <a href='#'>Link</a>
      </main>
    )
  }

  export default ComponentePrincipal;