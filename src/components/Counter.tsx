import { useState } from "react"
import './counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <>
        <h1 >{count}</h1>
        <button onClick={() => setCount(c => c + 1)}>Add count</button>
        </>
    )
}