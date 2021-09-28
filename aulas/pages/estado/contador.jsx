import { useState } from "react"
import ContadorDisplay from "../../components/contadorDisplay"

export default function Contador() {
    const [numero, setNumero] = useState(0)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)
    
    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        fontSize: "2em",
        color: "#fff",
        height: "100vh"
    }
    const btns = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    }
    return(
        <div style={estilo}>
            <h1>Contador</h1>
            <ContadorDisplay numero={numero}/>
            <div style={btns}>
                <button onClick={dec}>-</button>
                <button onClick={inc}>+</button>
            </div>
        </div>
    )
}