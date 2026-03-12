/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  '\n  query GetFeaturedProducts {\n    products(options: { take: 4 }) {\n      items {\n        id\n        name\n        slug\n        description\n        featuredAsset {\n          id\n          preview\n        }\n        variants {\n          id\n          priceWithTax\n        }\n      }\n    }\n  }\n': typeof types.GetFeaturedProductsDocument
  '\n  query GetProduct($slug: String!) {\n    product(slug: $slug) {\n      id\n      name\n      slug\n      description\n      featuredAsset {\n        id\n        preview\n      }\n      assets {\n        id\n        preview\n      }\n      variants {\n        id\n        name\n        priceWithTax\n        sku\n        stockLevel\n        featuredAsset {\n          id\n          preview\n        }\n      }\n    }\n  }\n': typeof types.GetProductDocument
  '\n  query GetProducts($collectionSlug: String) {\n    products(\n      options: { take: 50, filter: { name: { contains: "" } } }\n    ) {\n      totalItems\n      items {\n        id\n        name\n        slug\n        description\n        featuredAsset {\n          id\n          preview\n        }\n        variants {\n          id\n          priceWithTax\n        }\n      }\n    }\n  }\n': typeof types.GetProductsDocument
  '\n  query GetCollections {\n    collections {\n      items {\n        id\n        name\n        slug\n        featuredAsset {\n          id\n          preview\n        }\n      }\n    }\n  }\n': typeof types.GetCollectionsDocument
}
const documents: Documents = {
  '\n  query GetFeaturedProducts {\n    products(options: { take: 4 }) {\n      items {\n        id\n        name\n        slug\n        description\n        featuredAsset {\n          id\n          preview\n        }\n        variants {\n          id\n          priceWithTax\n        }\n      }\n    }\n  }\n':
    types.GetFeaturedProductsDocument,
  '\n  query GetProduct($slug: String!) {\n    product(slug: $slug) {\n      id\n      name\n      slug\n      description\n      featuredAsset {\n        id\n        preview\n      }\n      assets {\n        id\n        preview\n      }\n      variants {\n        id\n        name\n        priceWithTax\n        sku\n        stockLevel\n        featuredAsset {\n          id\n          preview\n        }\n      }\n    }\n  }\n':
    types.GetProductDocument,
  '\n  query GetProducts($collectionSlug: String) {\n    products(\n      options: { take: 50, filter: { name: { contains: "" } } }\n    ) {\n      totalItems\n      items {\n        id\n        name\n        slug\n        description\n        featuredAsset {\n          id\n          preview\n        }\n        variants {\n          id\n          priceWithTax\n        }\n      }\n    }\n  }\n':
    types.GetProductsDocument,
  '\n  query GetCollections {\n    collections {\n      items {\n        id\n        name\n        slug\n        featuredAsset {\n          id\n          preview\n        }\n      }\n    }\n  }\n':
    types.GetCollectionsDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetFeaturedProducts {\n    products(options: { take: 4 }) {\n      items {\n        id\n        name\n        slug\n        description\n        featuredAsset {\n          id\n          preview\n        }\n        variants {\n          id\n          priceWithTax\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetFeaturedProducts {\n    products(options: { take: 4 }) {\n      items {\n        id\n        name\n        slug\n        description\n        featuredAsset {\n          id\n          preview\n        }\n        variants {\n          id\n          priceWithTax\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetProduct($slug: String!) {\n    product(slug: $slug) {\n      id\n      name\n      slug\n      description\n      featuredAsset {\n        id\n        preview\n      }\n      assets {\n        id\n        preview\n      }\n      variants {\n        id\n        name\n        priceWithTax\n        sku\n        stockLevel\n        featuredAsset {\n          id\n          preview\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetProduct($slug: String!) {\n    product(slug: $slug) {\n      id\n      name\n      slug\n      description\n      featuredAsset {\n        id\n        preview\n      }\n      assets {\n        id\n        preview\n      }\n      variants {\n        id\n        name\n        priceWithTax\n        sku\n        stockLevel\n        featuredAsset {\n          id\n          preview\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetProducts($collectionSlug: String) {\n    products(\n      options: { take: 50, filter: { name: { contains: "" } } }\n    ) {\n      totalItems\n      items {\n        id\n        name\n        slug\n        description\n        featuredAsset {\n          id\n          preview\n        }\n        variants {\n          id\n          priceWithTax\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetProducts($collectionSlug: String) {\n    products(\n      options: { take: 50, filter: { name: { contains: "" } } }\n    ) {\n      totalItems\n      items {\n        id\n        name\n        slug\n        description\n        featuredAsset {\n          id\n          preview\n        }\n        variants {\n          id\n          priceWithTax\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetCollections {\n    collections {\n      items {\n        id\n        name\n        slug\n        featuredAsset {\n          id\n          preview\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetCollections {\n    collections {\n      items {\n        id\n        name\n        slug\n        featuredAsset {\n          id\n          preview\n        }\n      }\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
