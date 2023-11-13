import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
    protected tableName = "project_users";

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid("id").primary().defaultTo(this.raw("uuid_generate_v4()"));

            table
                .uuid("project_id")
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                .notNullable();

            table
                .uuid("user_id")
                .references("id")
                .inTable("users")
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
