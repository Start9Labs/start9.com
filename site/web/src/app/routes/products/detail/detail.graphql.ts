import { graphql } from '../../../../gql'

export const GET_PRODUCT = graphql(`
  query GetProduct($slug: String!) {
    product(slug: $slug) {
      id
      name
      slug
      description
      featuredAsset {
        id
        preview
      }
      assets {
        id
        preview
      }
      variants {
        id
        name
        priceWithTax
        sku
        stockLevel
        featuredAsset {
          id
          preview
        }
      }
    }
  }
`)
