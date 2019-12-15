import { importSchema } from "graphql-import";
import resolvers from "./resolverMap";
import { makeExecutableSchema } from "apollo-server-express";

const typeDefs = importSchema(__dirname + '/schema/schema.graphql');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
