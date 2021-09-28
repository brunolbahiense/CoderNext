export default function repetcao1(){
    const listaAprovados = [
        'Joao',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Lara'
    ]

    //dessa forma se transforma os elementos do array em uma lista, usando o map
    function renderizarLista () {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }

    return(
        <ul>
            {renderizarLista()}
        </ul>
    )

}
