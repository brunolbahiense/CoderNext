import styles from '../styles/Porta.module.css'
import PortaModel from '../model/porta'

interface PortaProps {
    value: PortaModel
    onchange: (novaporta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta  = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    const alternarSelecao = e => props.onchange(porta.alternarSelecao())

    const open = e => {
        e.stopPropagation()
        props.onchange(porta.open())
    }

    function Render() {
        return(
            <div className={styles.porta}>
                    <div className={styles.numero}>{porta.numero}</div>
                    <div className={styles.macaneta} onClick={open}></div>
                </div>
        )
    }
    return(
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.frame} ${selecionada}`}>
                {porta.aberta ? false : Render()}
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}