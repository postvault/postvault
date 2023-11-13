import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import seeder from "Config/seeder";
import UserFactory from "Database/factories/UserFactory";

export default class extends BaseSeeder {
    public async run() {
        // Write your database queries inside the run method
        await UserFactory.createMany(seeder.dev.users);
    }
}
