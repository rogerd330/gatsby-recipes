import React, { useState, useReducer } from "react"
import Greeter from "../components/greeter"

export default function Hello() {

    // const [name, setName] = useState("")

    // const user = {
    //     title: 'Instructor',
    //     grade: 'B'
    // }

    const classRoom = [
        {
            name: 'John',
            title: 'Class President',
            grade: 'A+'
        },
        {
            name: 'Jane',
            title: 'Class Vice President',
            grade: 'A++'
        },
        {
            name: 'Joey',
            title: 'Hall Monitor',
            grade: 'B-'
        }
    ];

    return (
        <>
            { classRoom.map( (student, idx) => {
                return <Greeter key={idx} {...student}></Greeter>
            })}
        </>
    )

    // return (
    //     <>
    //     {/* <input type="text" value={name} onChange={ (e) => { setName(e.target.value) } } /> */}
    //     <input type="text" value={name} onChange={ (e) => { setName( e.target.value )} } />
    //     <Greeter visitor={name} title={user.title} grade={user.grade}></Greeter>
    //     </>
    // )

    // return (
    //     <>
    //     <input type="text" value={name} onChange={ (e) => { setName(e.target.value) } } />
    //     <Greeter visitor={name} {...user}></Greeter>
    //     </>
    // )
}