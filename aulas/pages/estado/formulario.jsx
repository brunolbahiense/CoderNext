import { useState } from "react"

export default function formulario() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [valor, setValor] = useState("inicial")

    function alterarImput(){
        setValor(valor + "!")
    }

    return(
        <div style={{
            display: "flex",
            flexDirection:"column"
        }}>
            <input type="text" value={valor} onChange={e => setValor(e.target.value)}/>
            <button onClick={alterarImput}>Alterar!</button>
            <span>Resultdo: {valor}</span>
        </div>
    )
}