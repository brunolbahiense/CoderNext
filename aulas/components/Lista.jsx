export default function Lista (props) {
    return(
        <div>
            <h1>LISTA DE NITO</h1>
            <ul>
                <li>{props.children}</li>
            </ul>
        </div>
    )
}
/* export default Lista = props => {
        <div>
            <h1>LISTA DE NITO</h1>
            <ul>
                <li>{props.children}</li>
            </ul>
        </div>
}
 */