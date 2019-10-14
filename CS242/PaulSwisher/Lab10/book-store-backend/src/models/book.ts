import mongoose from 'mongoose';

export type BookModel = mongoose.Document & {
  title: string; 
  isbn: string;
  author: string;
  picture: string; 
  price: number;
  id: string;
};

// Build a schema and use it to do the validation
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  isbn: { type: String, required: true },
  author: { type: String, required: true },
  // put image link verification here
  picture: { type: String, required: true },
  price: {type: Number, reuqired: true, min: 0},
  id: {type: String, required: false},
});

const Book = mongoose.model<BookModel>('Book', schema,);

// Create a new user in the database

  export const addBook = (title: string, isbn: string, author: string, picture: string, price: number, id: string, ) => {
    new Book({ title, isbn, author, picture, price, id }).save();
  };

  export const fetchBooks = async () => await Book.find({});

  export const fetchBook = async (id: string) => await Book.find({ _id: id});

  export const updateBook = async (
    id: string, title: string, isbn: string, author: string, picture: string, price: number, 
    ) => await Book.findByIdAndUpdate(id, { title, isbn, author, picture, price });

  export const deleteBook = async (id: string) => await Book.deleteOne({ _id: id });