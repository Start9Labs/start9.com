import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/shop-api',
  documents: 'src/**/*.graphql.ts',
  generates: {
    'src/gql/': {
      preset: 'client',
      config: {
        scalars: {
          Money: 'number',
        },
        namingConvention: {
          enumValues: 'keep',
        },
      },
    },
  },
}

export default config
