import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Layout from "../components/layout"

export default function Photos() {
    return (
        <>
            <Layout>
                <Carousel>
                    <Carousel.Item>
                        <img src="img/lake.jpg" className="img-fluid" alt="The Lake"/>
                        <Carousel.Caption>
                            <h3>The Lake</h3>
                            <p>Life is Better on the Lake</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="img/landscape.jpg" className="img-fluid" alt="Beautiful Landscape"/>
                        <Carousel.Caption>
                            <h3>Landscape</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="img/sunset.jpg" className="img-fluid" alt="The Sunset"/>
                        <Carousel.Caption>
                            <h3>Sunset</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Layout>
        </>
    )
}