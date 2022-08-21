import Card from './Card'

const ComponentePrincipal = () => {

    return (
      <main className='ComponentePrincipal'>
        <h2>Conteúdo Principal</h2>

        <div>
            <Card conteudo='Alguma Coisa'/>
            <Card conteudo='Outra coisa'/>
        </div>

        <a href='#'>Link</a>
      </main>
    )
  }

  export default ComponentePrincipal;