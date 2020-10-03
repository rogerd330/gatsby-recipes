import React from "react"

export default function Greeter(props) {
    return (
        <>
        {/* <h2>Hello <strong>{props.visitor || 'World'}</strong>!</h2> */}
        <h2>Hello <strong>{props.name || 'World'}</strong> the {props.title} with a grade of {props.grade}!</h2>
        </>
    )
}

// export default function Greeter({visitor}) {
//     return (
//         <>
//         <h1>Hello <strong>{visitor || 'World'}</strong>!</h1>
//         </>
//     )
// }

// export default function Greeter({visitor, title, grade}) {
//     return (
//         <>
//         Hello <strong>{visitor || 'World'}</strong> the {title} with a grade of {grade}!
//         </>
//     )
// }