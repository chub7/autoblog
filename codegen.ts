
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:1337/graphql",
  documents: "graphql/**/*.graphql",
  generates: {
    "utils/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;