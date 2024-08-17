import fs from 'fs';
import { JSONSchemaFaker as jsf } from 'json-schema-faker';
import serviceSchema from './fakeData/service.js';

jsf.option({
    alwaysFakeOptionals: true,
});
const service = jsf.generate(serviceSchema);
// dump to file "./fakeData/service.json"
fs.writeFileSync('./fakeData/serviceData.json', JSON.stringify(service, null, 2));

