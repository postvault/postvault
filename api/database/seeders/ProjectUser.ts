import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import seeder from "Config/seeder";
import ProjectUserFactory from "Database/factories/ProjectUserFactory";

export default class extends BaseSeeder {
    public async run() {
        // Write your database queries inside the run method
        await ProjectUserFactory.createMany(seeder.dev.projectUsers);
    }
}
