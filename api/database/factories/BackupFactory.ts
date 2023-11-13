import Backup from "App/Models/Backup";
import Factory from "@ioc:Adonis/Lucid/Factory";
import Database from "@ioc:Adonis/Lucid/Database";
import { DateTime } from "luxon";

export default Factory.define(Backup, async ({ faker }) => {
    const randomDatabaseStorageId = await Database.from("database_storages")
        .select("id")
        .orderByRaw("random()")
        .first();

    const dumpStartedAt = DateTime.fromJSDate(faker.date.past());
    const dumpFinishedAt = dumpStartedAt.plus({
        minutes: faker.number.int({ min: 1, max: 15 }),
    });
    const uploadStartedAt = dumpFinishedAt.plus({
        seconds: faker.number.int({ min: 1, max: 5 }),
    });
    const uploadFinishedAt = uploadStartedAt.plus({
        minutes: faker.number.int({ min: 1, max: 5 }),
    });

    return {
        status: faker.number.int({ min: 0, max: 7 }),
        databaseStorageId: randomDatabaseStorageId?.id,
        dumpStartedAt,
        dumpFinishedAt,
        uploadStartedAt,
        uploadFinishedAt,
    };
}).build();
