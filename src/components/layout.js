import React from "react"
import "./layout.scss"
import { CartContextProvider } from "../../shopping.js"
import Header from "./header.js"

export default function Layout({children}) {
  return (
      <CartContextProvider>
          <div className="container">
              <Header></Header>
              <hr />
              {children}
          </div>
      </CartContextProvider>
  )
}