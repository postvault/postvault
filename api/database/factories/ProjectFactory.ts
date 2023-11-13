import Project from "App/Models/Project";
import Factory from "@ioc:Adonis/Lucid/Factory";
import Database from "@ioc:Adonis/Lucid/Database";

export default Factory.define(Project, async ({ faker }) => {
    const randomUser = await Database.from("users").select("id").orderBy("random()").first();

    return {
        name: `Project - ${faker.string.sample({ min: 1, max: 2 })}`,
        description: faker.string.sample({ min: 6, max: 20 }),
        userId: randomUser.id,
    };
}).build();
