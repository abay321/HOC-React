import { ReactNode, useState } from 'react'

type Props = { counter: number, option: 'plus' | 'minus' | "times" }

export default function withCalculate(OriginalComponent: (props: any) => JSX.Element) {

    return (props: Props) => {
        const [nomor, setNomor] = useState(props.option === "times" ? 1 : 0)

        let calculateHandler

        const plusHandler = () => {
            setNomor(e => e + props.counter)
        }

        const minusHandler = () => {
            setNomor(e => e - props.counter)
        }

        const timesHandler = () => {
            setNomor(e => e * props.counter)
        }

        if (props.option === "plus") { calculateHandler = plusHandler }
        if (props.option === "minus") { calculateHandler = minusHandler }
        if (props.option === "times") { calculateHandler = timesHandler }

        return (
            <OriginalComponent
                nomor={nomor}
                calculateHandler={calculateHandler}
                {...props}
            />
        )
    }
}
