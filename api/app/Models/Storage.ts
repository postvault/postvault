import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Storage extends BaseModel {
    @column({ isPrimary: true })
    public id: string;

    @column()
    public name: string;

    @column()
    public endpoint: string;

    @column()
    public accessKey: string;

    @column()
    public secretKey: string;

    @column()
    public region: string;

    @column()
    public bucket: string;

    @column()
    public projectId: string;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;
}
