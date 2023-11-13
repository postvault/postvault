import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import seeder from "Config/seeder";
import StorageFactory from "Database/factories/StorageFactory";

export default class extends BaseSeeder {
    public async run() {
        // Write your database queries inside the run method
        await StorageFactory.createMany(seeder.dev.storages);
    }
}
