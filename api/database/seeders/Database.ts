import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import seeder from "Config/seeder";
import DatabaseFactory from "Database/factories/DatabaseFactory";

export default class extends BaseSeeder {
    public async run() {
        // Write your database queries inside the run method
        await DatabaseFactory.createMany(seeder.dev.databases);
    }
}
