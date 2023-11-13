import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
    protected tableName = "storages";

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid("id").primary().defaultTo(this.raw("uuid_generate_v4()"));
            table.string("name").notNullable();
            table.string("endpoint").notNullable();
            table.string("access_key").notNullable();
            table.string("secret_key").notNullable();
            table.string("region").notNullable();
            table.string("bucket").notNullable();

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
