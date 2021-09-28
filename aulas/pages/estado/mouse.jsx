import { useState } from "react"

export default function Mouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        fontSize: "3em",
        color: "#fff",
        height: "100vh"
    }

    function quandoMover (ev){
       setX(ev.clientX)
       setY(ev.clientY)
    }
    return(
        <div style={estilo} onMouseMove={quandoMover}>
            <div>Eixo X: {x}</div>
            <div>Eixo Y: {y}</div>
        </div>
    )
}