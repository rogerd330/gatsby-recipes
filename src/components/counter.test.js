import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import Counter from "./counter"

describe("make sure our counter component works", () => {
    test("do I have a page heading", () => {
        render(<Counter />)
        expect(screen.getByTestId("hero-title")).toHaveTextContent("TDD is Awesome!")
    })

    test("can I increment the counter by clicking a button", () => {
        render(<Counter/>)
        fireEvent.click(screen.getByTestId("increment"))
        expect(screen.getByTestId("counter")).toHaveTextContent(1)
    })
})

// describe("counter component tests", () => {
//     test("page heading text is visible", () => {
//         render(<Counter/>)
//         expect(screen.getByTestId("hero-title")).toHaveTextContent("TDD is Awesome!")
//     })

    // test("can click button to increment counter", () => {
    //     render(<Counter/>)
    //     fireEvent.click(screen.getByTestId("increment"))

    //     expect(screen.getByTestId("counter")).toHaveTextContent(1)
    // })

    // test("can click button to decrememtn counter", () => {
    //     render(<Counter/>)
    //     fireEvent.click(screen.getByTestId("decrement"))

    //     expect(screen.getByTestId("counter")).toHaveTextContent(-1)
    // })
// })