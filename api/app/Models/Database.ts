import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Project from "./Project";

export default class Database extends BaseModel {
    @column({ isPrimary: true })
    public id: string;

    @column()
    public name: string;

    @column()
    public host: string;

    @column()
    public port: number;

    @column()
    public username: string;

    @column()
    public password: string;

    @column()
    public databaseName: string;

    @column()
    public projectId: string;

    @belongsTo(() => Project)
    public project: BelongsTo<typeof Project>;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;
}
