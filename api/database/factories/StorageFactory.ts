import Storage from "App/Models/Storage";
import Factory from "@ioc:Adonis/Lucid/Factory";

export default Factory.define(Storage, ({ faker }) => {
    return {
        bucket: faker.string.sample(1),
        accessKey: faker.string.uuid(),
        secretKey: faker.string.uuid(),
        name: `Storage - ${faker.string.sample(1)}`,
        region: faker.location.countryCode(),
    };
}).build();
