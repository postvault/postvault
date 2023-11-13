import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import seeder from "Config/seeder";
import ProjectFactory from "Database/factories/ProjectFactory";

export default class extends BaseSeeder {
    public async run() {
        // Write your database queries inside the run method
        await ProjectFactory.createMany(seeder.dev.projects);
    }
}
