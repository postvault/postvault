import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import { BackupStatus } from "App/Enums/BackupStatus";
import DatabaseStorage from "./DatabaseStorage";

export default class Backup extends BaseModel {
    @column({ isPrimary: true })
    public id: string;

    @column()
    public status: BackupStatus;

    @column()
    public databaseStorageId: string;

    @belongsTo(() => DatabaseStorage)
    public databaseStorage: BelongsTo<typeof DatabaseStorage>;

    @column.dateTime()
    public dumpStartedAt: DateTime;

    @column.dateTime()
    public dumpFinishedAt: DateTime;

    @column.dateTime()
    public uploadStartedAt: DateTime;

    @column.dateTime()
    public uploadFinishedAt: DateTime;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;
}
