import Card from './Card'
import Contador from './Contador'

const ComponentePrincipal = () => {

    return (
      <main className='ComponentePrincipal'>
        <h2>Conteúdo Principal</h2>

        <div>
            <Card conteudo='Alguma Coisa'/>
            <Card conteudo='Outra coisa'/>
        </div>

        <a href='#'>Link</a>

        <Contador />
      </main>
    )
  }

  export default ComponentePrincipal;