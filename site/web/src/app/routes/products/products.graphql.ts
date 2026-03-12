import { graphql } from '../../../gql'

export const GET_PRODUCTS = graphql(`
  query GetProducts($collectionSlug: String) {
    products(options: { take: 50, filter: { name: { contains: "" } } }) {
      totalItems
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

export const GET_COLLECTIONS = graphql(`
  query GetCollections {
    collections {
      items {
        id
        name
        slug
        featuredAsset {
          id
          preview
        }
      }
    }
  }
`)
