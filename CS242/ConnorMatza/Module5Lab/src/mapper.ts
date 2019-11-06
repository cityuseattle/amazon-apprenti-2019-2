import {DataMapper} from '@aws/dynamodb-data-mapper'
import db from './dynamo';
import { User } from './models/user';
import { Product } from './models/product';

const mapper = new DataMapper({
  client: db
})


export const initTables = async () => {
  const readWriteCapacity = {
    readCapacityUnits: 2,
    writeCapacityUnits: 2,
  };
  try {
    //await mapper.ensureTableExists(User, readWriteCapacity);
    console.log('before');
    await mapper.ensureTableExists(User, readWriteCapacity);
    await mapper.ensureTableExists(Product, readWriteCapacity);
    console.log('after');
  }
  catch (e) {
    console.error(e.message);
  }
}
export default mapper;
