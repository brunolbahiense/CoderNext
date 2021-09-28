function listagerada () {
    const lista =[]
    for(let i = 1; i <= 10; i++){
        lista.push(<span>{i},</span>)
    }
    return lista
}

export default function lista () {
    return (
        <div>
            {listagerada()}
        </div>
    )
}