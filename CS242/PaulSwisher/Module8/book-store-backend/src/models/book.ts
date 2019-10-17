import mongoose from 'mongoose';

export type BookModel = mongoose.Document & {
  
  title: string; 
  isbn: string;
  author: string;
  picture: string; 
  price: number;
};

// Build a schema and use it to do the validation
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  isbn: { type: String, required: true },
  author: { type: String, required: true },
  picture: { type: String, required: true },
  price: {type: Number, reuqired: true, min: 0}
});

const User = mongoose.model<BookModel>('User', schema);

// Create a new user in the database
export const addBook = (title: string, isbn: string, author: string, picture: string, price: number) => {
new User({ title, isbn, author, picture, price }).save();
};
