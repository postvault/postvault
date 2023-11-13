import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import User from "./User";
import Project from "./Project";

export default class ProjectUser extends BaseModel {
    @column({ isPrimary: true })
    public id: string;

    @column()
    public projectId: string;

    @column()
    public userId: string;

    @belongsTo(() => User)
    public user: BelongsTo<typeof User>;

    @belongsTo(() => Project)
    public project: BelongsTo<typeof Project>;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;
}
