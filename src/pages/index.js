import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

export default function Home({data}) {
  return (
    <Layout>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>Hello class!</div>

      <div className="row">
      {data.allContentfulRecipes.nodes.map((node, index) => (
            <div className="col-md-3" key={index}>
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={ node.image.file.url } alt={ node.name } data-holder-rendered="true" />
                <div className="card-body">
                  <p className="card-text">{node.name}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href={node.name} className="btn btn-sm btn-outline-secondary">View</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>

      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/table.jpeg" className="d-block w-100" alt="Roger" />
          </div>
            <div className="carousel-item">
              <img src="img/roger.jpeg" className="d-block w-100" alt="Restaurant Table"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allContentfulRecipes {
    nodes {
      name
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
  }
}
`