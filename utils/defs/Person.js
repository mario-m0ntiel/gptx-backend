export const typeDefs = `
    type Query {
        getPersons: [Person]
        getPersonById(id: ID!): Person
    }

    type Mutation {
        createPerson(id: ID!, name: String!, firstName: String!, lastName: String!, address: String!, phone: String!): Person
        updatePerson(id: ID!, name: String!, firstName: String!, lastName: String!, address: String!, phone: String!): Person
        deletePerson(id: ID!): Person
    }

    type Person {
        id: ID!
        name: String!
        firstName: String!
        lastName: String!
        address: String!
        phone: String!
    }
`;