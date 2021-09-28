import If from "../../components/If";


export default function condicional2() {
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
    const numero = random(0, 100)
    return (
        <div>
            <If test={numero % 2 === 0}>
                <h1>O numero {numero} é par</h1>
            </If>
            <If test={numero % 2 === 1}>
                <h1>O numero {numero} é ímpar</h1>
            </If>

        </div>
    )
}