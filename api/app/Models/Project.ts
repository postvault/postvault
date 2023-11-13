import { DateTime } from "luxon";
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Database from "./Database";
import User from "./User";

export default class Project extends BaseModel {
    @column({ isPrimary: true })
    public id: string;

    @column()
    public name: string;

    @column()
    public description: string;

    @hasMany(() => Database)
    public databases: HasMany<typeof Database>;

    @column()
    public userId: string;

    @belongsTo(() => User)
    public user: BelongsTo<typeof User>;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;
}
