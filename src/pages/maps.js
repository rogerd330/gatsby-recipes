import React from "react"
import Layout from "../components/layout"

export default function Maps() {
    return (
        <>
        <Layout>
            <div className="embed-responsive embed-responsive-16by9">
            <iframe
            width="600"
            height="450"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_GOOGLE_MAPS_KEY}&q=Space+Needle,Seattle+WA`} allowFullScreen>
            </iframe>
            </div>
        </Layout>
        </>
    )
}