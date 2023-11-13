import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Database from "./Database";
import Storage from "./Storage";

export default class DatabaseStorage extends BaseModel {
    @column({ isPrimary: true })
    public id: string;

    @column()
    public databaseId: string;

    @column()
    public storageId: string;

    @column()
    public path: string;

    @column()
    public nameTemplate: string;

    @column()
    public backupPattern: string;

    @belongsTo(() => Database)
    public database: BelongsTo<typeof Database>;

    @belongsTo(() => Storage)
    public storage: BelongsTo<typeof Storage>;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;
}
