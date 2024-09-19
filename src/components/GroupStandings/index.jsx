import { useEffect, useState } from 'react'
import styles from './GroupStandings.module.css'


function GroupStandings() {

    const [grupos, setGrupos] = useState([])

    useEffect(() => {
        const buscarGrupos = async () => {
            const response = await fetch('https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/classificacao-por-grupos-2023.json')
            const data = await response.json()
            setGrupos(data)
        }
        buscarGrupos()
    }, [])

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Seleção</th>
                    <th>Pontos</th>
                    <th>Vitorias</th>
                    <th>Empates</th>
                    <th>Derrotas</th>
                    <th>Gols Pro</th>
                    <th>Gols Contra</th>
                    <th>Saldo Gols</th>
                </tr>
            </thead>

            <tbody>
                {
                    grupos.filter( grupo => grupo.grupo === "A").map(grupo => (
                        <tr key={grupo.selecao}>
                            <td>{grupo.posicao}</td>
                            <td className={styles.esquerda}>{grupo.selecao}</td>
                            <td>{grupo.pontos}</td>
                            <td>{grupo.vitorias}</td>
                            <td>{grupo.empates}</td>
                            <td>{grupo.derrotas}</td>
                            <td>{grupo.gols_pro}</td>
                            <td>{grupo.gols_contra}</td>
                            <td>{grupo.saldo_gols}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default GroupStandings