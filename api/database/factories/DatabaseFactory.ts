import Database from "App/Models/Database";
import Factory from "@ioc:Adonis/Lucid/Factory";

export default Factory.define(Database, async ({ faker }) => {
    const randomProject = await Database.query()
        .select("id")
        .from("projects")
        .orderBy("random()")
        .first();
    return {
        databaseName: faker.string.sample(1),
        host: faker.internet.domainName(),
        port: faker.datatype.boolean({ probability: 0.8 }) ? 5432 : faker.internet.port(),
        name: `Database - ${faker.string.sample(1)}`,
        password: faker.internet.password(),
        username: faker.internet.userName(),
        projectId: randomProject?.id,
    };
}).build();
