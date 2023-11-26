import { type CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema:
    'https://api-sa-east-1.hygraph.com/v2/clpebswsshptq01uih9yqd9c8/master',
  documents: ['src/graphql/**/*.graphql'],
  generates: {
    './src/graphql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
  config: {
    reactApolloVersion: 3,
    withHooks: true,
    withHOC: false,
    withComponent: false,
  },
}

export default config
