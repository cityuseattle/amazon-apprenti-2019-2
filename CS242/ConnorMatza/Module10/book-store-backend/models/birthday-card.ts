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


@table('birthdaycards2')
export class BirthdayCard {
  @autoGeneratedHashKey()
  _id?: string;
  @attribute()
  title?: string;
  @attribute()
  material?: string;
  @attribute()
  picture?: string;
  @attribute()
  price?: number;
}


export function addBirthdayCard(title: string, material: string, picture: string, price: number) {
  mapper.put(Object.assign(new BirthdayCard, {title: title, material: material, picture: picture, price: price}))
    .then(objectSaved => {
      console.log(objectSaved)
    })
    .catch(err => {
      console.log(err, err.stack);
    })
  }

  export async function updateBirthdayCard(id: string, title: string, material: string, picture: string, price: number) {
    try {
      await mapper.update(Object.assign(new BirthdayCard, {_id: id, title: title, material: material, picture: picture, price: price}))
    } catch (e) {
      console.error(e);
    }
  }

  export async function deleteBirthdayCard(id: string) {
    try {
      await mapper.delete(Object.assign(new BirthdayCard, {_id: id}));
    } catch(e) {
      console.error(e);
    }
  }

  export async function fetchBirthdayCard(id: string) {
    let birthdaycard = await mapper.get(Object.assign(new BirthdayCard, {_id: id}))
    return birthdaycard;

  }

  export async function findBirthdayCard(title: string) {
    let user = await mapper.get(Object.assign(new BirthdayCard, {title: title}));
    return user
  }

  export async function fetchBirthdayCards() {
    let books = [];
    for await (const item of mapper.scan(BirthdayCard)) {
      //what is item, is it an object? a JSON string?
      books.push(item);
    }
    return books;
  }