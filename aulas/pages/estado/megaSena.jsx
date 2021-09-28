import { useState, useEffect } from "react"
import { mega } from "../../functions/mega"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function MegaSena() {
    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(mega())
    },[])

    function renderNumeros(){
         return numeros.map(numero => <NumeroDisplay key={numero} numero={numero}/>)
    }
    
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
            <h1>Mega Sena</h1>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                margin: "1em"
            }}>
                {renderNumeros()} 
            </div>
            <div style={btns}>
                <input  
                    style={{ fontSize: "1em"}} 
                    type="number" 
                    min={1} 
                    max={10}  
                    onChange={ev => setQtde(ev.target.value)}
                />
                <button 
                    style={{ fontSize: "1em"}} 
                    onClick={() => setNumeros(mega(qtde))}>
                    Gerar números
                </button>
            </div>
        </div>
    )
}