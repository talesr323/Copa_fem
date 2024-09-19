import './App.css'
import Card from './components/Card'
import Game_Table from './components/Game_Table'
import GroupStandings from './components/GroupStandings'

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
      <h2>Grupo A</h2>
        <GroupStandings /> 
    </section>

    </>
  )
}

export default App
