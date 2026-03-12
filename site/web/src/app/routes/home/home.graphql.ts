import { graphql } from '../../../gql'

export const GET_FEATURED_PRODUCTS = graphql(`
  query GetFeaturedProducts {
    products(options: { take: 4 }) {
      items {
        id
        name
        slug
        description
        featuredAsset {
          id
          preview
        }
        variants {
          id
          priceWithTax
        }
      }
    }
  }
`)
