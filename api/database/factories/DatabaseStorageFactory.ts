import DatabaseStorage from "App/Models/DatabaseStorage";
import Factory from "@ioc:Adonis/Lucid/Factory";
import Database from "@ioc:Adonis/Lucid/Database";

export default Factory.define(DatabaseStorage, async ({ faker }) => {
    const randomDatabase = await Database.query()
        .select("id")
        .from("databases")
        .orderByRaw("random()")
        .first();

    const randomStorage = await Database.query()
        .select("id")
        .from("storages")
        .orderByRaw("random()")
        .first();

    const templateChoices = [
        "{databaseName}",
        "{databaseName}-{date}",
        "{databaseName}-{date}-{time}",
        "{projectName}-{databaseName}-{date}-{time}",
    ];

    return {
        databaseId: randomDatabase?.id,
        storageId: randomStorage?.id,
        nameTemplate: faker.helpers.arrayElement(templateChoices),
        backupPattern: faker.system.cron(),
        path: faker.system.filePath(),
    };
}).build();
