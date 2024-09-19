import './App.css'
import Card from './components/Card'
import Game_Table from './components/Game_Table'
import GroupStandings from './components/GroupStandings'
import KnockoutStage from './components/KnockoutStage'

function App() {

  return (
    <>
    <h1>Copa do mundo feminina 2023</h1>
    <section className='cards'>
       <Card/>
    </section>

    <h2>Tabela de Jogos</h2>

    <section className='game_table'>
        <Game_Table /> 
    </section>
        
    <h2>Classificação por Grupo</h2>

    <section className='group_table'>
        <GroupStandings /> 
    </section>

    <h2>Oitava de Final</h2>

    <section className='knockout_table'>
        <KnockoutStage fase="oitavas"/> 
    </section>
    </>
  )
}

export default App
