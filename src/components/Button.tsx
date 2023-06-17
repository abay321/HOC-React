import withCalculate from '../utils/withCalculate'

function Button(props: any) {

    let symbol
    if (props.option === 'plus') symbol = "+"
    if (props.option === 'minus') symbol = "-"
    if (props.option === 'times') symbol = "*"

    return (
        <div>
            <h1>x {symbol} {props.counter}</h1>
            <p>{props.nomor}</p>
            <button onClick={props.calculateHandler}>{props.option}</button>
        </div>
    )
}
export default withCalculate(Button)