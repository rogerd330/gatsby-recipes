import React, { useContext, useEffect, useState } from "react"
import { Link } from "@reach/router"
import { CartContext } from "../../shopping.js"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import { getWeather } from "../../weather"

export default function Header() {
    const [ weather, setWeather ] = useState(null)
    const { itemCount } = useContext(CartContext)
    
    useEffect(() => {
        getWeather(72758).then(response => setWeather(response))
    }, [setWeather])
    
    return (
        <>
         <Helmet>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          </Helmet>
        <StaticQuery
            query={graphql`
            query HeadingQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
            `}
            render={data => (
            <header>
                <h1>{data.site.siteMetadata.title} <i className="fa fa-thumbs-up" aria-hidden="true"></i></h1>
            </header>
            )}
        />

            <ul className="list-group list-group-horizontal">
              <li className="list-group-item"><Link to="/">Home</Link></li>
              <li className="list-group-item"><Link to="about">About</Link></li>
              <li className="list-group-item"><Link to="maps">Maps</Link></li>
              <li className="list-group-item"><Link to="checkout">Check Out</Link></li>
              <li className="list-group-item">

                    {itemCount === 0 &&
                        <strong>How about you buy something?</strong>
                    }

                    {itemCount > 0 &&
                        <strong>You have {itemCount} item(s) in your cart!</strong>
                    }

              </li>
              { weather !== null && 
                <li className="list-group-item">It's currently { weather.main.temp } and { weather.weather[0].description }!</li>
              }
          </ul>

        </>
    )
}
