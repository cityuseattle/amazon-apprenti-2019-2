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

const Book = mongoose.model<BookModel>('Book', schema);

// Create a new Book in the database
export const addBook = (title: string, isbn: string, author: string, picture: string, price: number ) => {
  new Book({ title, isbn, author, picture, price }).save();
};

// Find a user based on the username
export const fetchBooks = async () => await Book.find({});
