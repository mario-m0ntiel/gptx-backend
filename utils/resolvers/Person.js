import { Person } from "../models/Person.js";

export const resolvers = {
    Query: {
        getPersons: async () => {
            return await Person.findAll();
        },
        getPersonById: async (_, { id }) /* Parent, args */ => {
            return await Person.findByPk(id);
        },
    },
    Mutation: {
        createPerson: async (_, { id, name, firstName, lastName, address, phone }) => {
            try {
                const newUser = await Person.create({ id, name, firstName, lastName, address, phone });
                return newUser;
            } catch (error) {
                console.log("Error al crear usuario:", error);
                throw new Error("Error al crear usuario");
            }
        },
        updatePerson: async (_, { id, name, firstName, lastName, address, phone }) => {
            const person = await Person.findByPk(id);
            await Person.update({ id, name, firstName, lastName, address, phone }, { where: { id } });
            return person;
        },
        deletePerson: async (_, { id }) => {
            const person = await Person.findByPk(id);
            await Person.destroy({ where: { id } });
            return person;
        }
    }
};