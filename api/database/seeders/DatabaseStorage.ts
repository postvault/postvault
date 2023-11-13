import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import seeder from "Config/seeder";
import DatabaseStorageFactory from "Database/factories/DatabaseStorageFactory";

export default class extends BaseSeeder {
    public async run() {
        // Write your database queries inside the run method
        await DatabaseStorageFactory.createMany(seeder.dev.databaseStorages);
    }
}
