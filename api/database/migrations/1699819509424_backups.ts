import BaseSchema from "@ioc:Adonis/Lucid/Schema";
import { BackupStatus } from "App/Enums/BackupStatus";

export default class extends BaseSchema {
    protected tableName = "backups";

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid("id").primary().defaultTo(this.raw("uuid_generate_v4()"));
            table.integer("status").defaultTo(BackupStatus.Finished);
            table.timestamp("dump_started_at", { useTz: true });
            table.timestamp("dump_finished_at", { useTz: true });
            table.timestamp("upload_started_at", { useTz: true });
            table.timestamp("upload_finished_at", { useTz: true });

            table
                .uuid("database_storage_id")
                .references("id")
                .inTable("database_storages")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                .notNullable();

            /**
             * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
             */
            table.timestamp("created_at", { useTz: true });
            table.timestamp("updated_at", { useTz: true });
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
