import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";

const mocks = {
    Query:()=>({
        trackForHome:()=>[...new Array(6)]
    }),
    Track: () => ({
      id: () => "track_01",
      length: () => 1210,
      title: () => "Astro Kitty, Space Explorer",
      author: () => {
        return {
          name: "Grumpy Cat",
          photo:"https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
        };
      },
      thumbnail: () =>
        "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
      modulesCount: () => 6,
    }),
  };

async function startApolloServer(){
    const server = new ApolloServer({
        schema:addMocksToSchema({
            schema: makeExecutableSchema({typeDefs}),
            mocks,
        })
    });
    const {url} = await startStandaloneServer(server)
    console.log(`🚀Server is running!
    Query at ${url}`);

}

startApolloServer()