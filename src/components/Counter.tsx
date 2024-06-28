import { useState } from "react"
import classes from  './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <>
        <h1 >{count}</h1>
        <button className={classes.btn} onClick={() => setCount(c => c + 1)}>Add count</button>
        </>
    )
}