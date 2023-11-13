import ProjectUser from "App/Models/ProjectUser";
import Factory from "@ioc:Adonis/Lucid/Factory";
import Database from "@ioc:Adonis/Lucid/Database";

export default Factory.define(ProjectUser, async ({ faker }) => {
    const randomProject = await Database.from("projects")
        .select("id")
        .orderByRaw("random()")
        .first();
    const randomUser = await Database.from("users").select("id").orderByRaw("random()").first();

    return {
        projectId: randomProject.id,
        userId: randomUser.id,
    };
}).build();
