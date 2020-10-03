import React, { useState } from "react"

export default function Counter() {

    const [ counter, setCounter ] = useState(0)

    return (
        <>
            <h1 data-testid="hero-title">TDD is Awesome!</h1>

            <h2 data-testid="counter">{ counter }</h2>

            <button data-testid="increment" onClick={() => { setCounter( counter + 1)}}>+</button>
        </>
    )
}