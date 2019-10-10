import mongoose from 'mongoose';

type BookModel = mongoose.Document & {
    title: string;
    isbn: string;
    author: string;
    picture: string;
    price: number;
}

// Build a schema and use it to do the validation
const schema = new mongoose.Schema({
    title: { type:String, required: true },
    isbn: { type: String, required: true },
    author: { type: String, required: true },
    // Should do validation for the picture url here
    picture: { type:String, required: true},
    price: { type: Number, required: true, min: 0},
});

const Book = mongoose.model<BookModel>('Book', schema);

// Create a new book in the database
export const addBook = (title: string, isbn: string, author: string, picture: string, price: number) => {
    new Book({ title, isbn, author, picture, price }).save();
};

// Find user based on the username
export const fetchBooks = async () => await Book.find({});

