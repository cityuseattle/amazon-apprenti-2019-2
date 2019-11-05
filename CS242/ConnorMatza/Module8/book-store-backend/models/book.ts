import aws from 'aws-sdk';
import db from '../dynamodbconfig';
import mapper from '../dynamodbmapper';
import {
    attribute,
    hashKey,
    rangeKey,
    table,
    autoGeneratedHashKey,
} from '@aws/dynamodb-data-mapper-annotations';


@table('books')
export class Book {
  @hashKey()
  title?: string;
  @attribute()
  isbn?: string;
  @attribute()
  author?: string;
  @attribute()
  picture?: string;
  @attribute()
  price?: number;
}


export function addBook(title: string, isbn: string, author: string, picture: string, price: number) {
  mapper.put(Object.assign(new Book, {title: title, isbn: isbn, author: author, picture: picture, price: price}))
    .then(objectSaved => {
      console.log(objectSaved)
    })
    .catch(err => {
      console.log(err, err.stack);
    })
  }

  export async function findProduct(title: string) {
    let user = await mapper.get(Object.assign(new Book, {title: title}));
    return user
  }