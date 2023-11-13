import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import seeder from "Config/seeder";
import BackupFactory from "Database/factories/BackupFactory";

export default class extends BaseSeeder {
    public async run() {
        // Write your database queries inside the run method
        await BackupFactory.createMany(seeder.dev.backups);
    }
}
