import gql from "graphql-tag";

export const typeDefs = gql`
    "A track is a group of Modules that teaches about a specific topic"
    type Query{
        "Query to get tracks array for the homepage grid"
        tracksForHome: [Track!]!
    }

    "A track is a group of Modules that teaches about a specific topic"
    type Track {
           id: ID!
           "length of the track in seconds"
           length: Int
           "title of the track"
           title: String!
           "author of the track"
           author: Author!
           "the track's main illustration"
           thumbnail: String
           "modules count the track contains"
           modulesCount: Int
        }
   "Author of a complete Track"
    type Author {
        id:ID!
        "Author's name"
        name: String!
        "photo of the author"
        photo: String
    }
`;

