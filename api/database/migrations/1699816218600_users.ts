import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
    protected tableName = "users";

    public async up() {
        await this.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

        this.schema.createTable(this.tableName, (table) => {
            table.uuid("id").primary().defaultTo(this.raw("uuid_generate_v4()"));
            table.string("email").notNullable().unique();
            table.string("password").notNullable();
            table.boolean("is_active").defaultTo(false);

            /**
             * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
             */
            table.timestamp("created_at", { useTz: true });
            table.timestamp("updated_at", { useTz: true });
        });
    }

    public async down() {
        await this.raw('DROP EXTENSION IF EXISTS "uuid-ossp";');
        this.schema.dropTable(this.tableName);
    }
}
