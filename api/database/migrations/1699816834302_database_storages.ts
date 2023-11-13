import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
    protected tableName = "database_storages";

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid("id").primary().defaultTo(this.raw("uuid_generate_v4()"));
            table.string("path").notNullable();
            table.string("name_template").notNullable();
            table.string("backup_pattern").notNullable();

            table
                .uuid("database_id")
                .references("id")
                .inTable("databases")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                .notNullable();

            table
                .uuid("storage_id")
                .references("id")
                .inTable("storages")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");

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
