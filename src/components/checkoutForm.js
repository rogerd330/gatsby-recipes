import React, { useState } from "react"
import axios from "axios"

export default function CheckoutForm() {

    const [ email, setEmail ] = useState("");
    const [ fullname, setFullname ] = useState("");

    function saveOrder() {
        alert("This is sample cart, your order was not really completed.")

        // let customer = {
        //     fullname: fullname,
        //     email: email,
        // }
        // axios.post("https://webhook.site/1022c860-ad18-46d0-9699-c8a6ad5ba435", customer);
    }

    return (
        <>
            <h2>Your Details</h2>

            <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) } }/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Your Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Hungry Harry" value={fullname} onChange={(e) => { setFullname(e.target.value) } } />
            </div>

            <p>
            ...more form fields here...
            </p>

            <button className="btn btn-lg btn-primary" onClick={() => saveOrder()}>Place Order</button>
        </>
    )
}