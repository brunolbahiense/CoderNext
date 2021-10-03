/* eslint-disable @next/next/link-passhref */
import { useEffect, useState } from 'react'
import Porta from '../../../components/Porta'
import { criarPortas, updatePortas } from '../../../functions/portas'
import styles from '../../../styles/Game.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Game() {
    const router = useRouter()
    const [portas, setPortas] = useState([])
    useEffect(() => {
        const portas = +router.query.portas
        const temPresente =   +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])

    function renderPortas(){
      return portas.map(porta => {
        return <Porta key={porta.numero} value={porta} 
          onchange={novaPorta => setPortas(updatePortas(portas, novaPorta))} />
      })
    }
    return (
        <div className={styles.game}>
            <div className={styles.portas}>
                {renderPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar jogo</button>
                </Link>
            </div>
        </div>
    )
}