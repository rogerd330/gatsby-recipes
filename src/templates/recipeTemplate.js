import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { firestore } from  "../../firebase.js"
import Layout from "../components/layout"
import Comments from "../components/comments.js"
import Helmet from "react-helmet"
import AddToCart from "../components/add-to-cart.js"

export default function RecipeTemplate({data}) {
    const recipe = data.contentfulRecipes
    const [comments, setComments] = useState([])

    useEffect(() => {
      firestore.collection(`comments`).orderBy(`Created`, `desc`).onSnapshot(snapshot => {
        const posts = snapshot.docs
          .filter(doc => doc.data().Page === recipe.name)
          .map(doc => {
            return { id: doc.id, ...doc.data() }
          })
        setComments(posts)
      })
    }, [recipe] )


    return (
      <>
        <Helmet bodyAttributes={ { class: `product-page ${recipe.sku}` } }>
          <title>{recipe.name} | My Restaurant</title>
          <meta name="description" value="Come try my React restaurant!"/>
        </Helmet>
        <Layout>
            <h2 className="animate__animated animate__bounce">{recipe.name} - ${recipe.price.toFixed(2)}</h2>
            
            <AddToCart item={ {sku: recipe.sku, price: recipe.price, name: recipe.name} }></AddToCart>

            <img src={recipe.image.file.url} alt={recipe.name} className="img-thumbnail" />
            <p>
                {recipe.description.description}
            </p>

            <Comments comments={comments} page={recipe.name} />

        </Layout>
      </>
    )
}

export const query = graphql`
query recipeQuery($slug: String!) {
    contentfulRecipes(name: {eq: $slug}) {
      name,
      description {
        description
      }
      image {
        file {
          url
        }
      }
      gallery {
        file {
            url
        }
      }
      price
      sku
    }
  }
`