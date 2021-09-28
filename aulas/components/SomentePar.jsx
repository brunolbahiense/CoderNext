export default function SomentePar(props) {
    //utilizando uma operação ternária para substituir o IF
    const numeroPar = props.numero % 2 === 0
    return numeroPar ? <h1>{props.numero}</h1> : null
/*     if(props.numero % 2 === 0){
        return <h1>{props.numero}</h1>
    } else{
        return null
    } */
}