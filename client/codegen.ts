import {} from '@graphql-codegen/cli'

const config = {
    schema: "http://localhost:4000",
    documents: ["src/**/*.tsx"],
    generates:{
        "./src/__generated__/":{
            preset:"client",
            presetConfig:{
                gqlTagName:"gql"
            }
        }
    },
    
};

export default config;