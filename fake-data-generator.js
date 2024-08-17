import fs from 'fs';
import { JSONSchemaFaker as jsf } from 'json-schema-faker';
import serviceSchema from './fakeData/service.js';
import openIncidentsSchema from './fakeData/openIncidents.js';

jsf.option({
    alwaysFakeOptionals: true,
});
// const service = jsf.generate(serviceSchema);
// dump to file "./fakeData/service.json"
// fs.writeFileSync('./fakeData/serviceData.json', JSON.stringify(service, null, 2));

const openIncidents = jsf.generate(openIncidentsSchema);
fs.writeFileSync('./fakeData/openIncidentsData.json', JSON.stringify(openIncidents, null, 2));

