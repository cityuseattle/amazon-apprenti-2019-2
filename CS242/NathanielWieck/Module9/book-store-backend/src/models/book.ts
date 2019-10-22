// import dependecy tools used to communicate with mongodb
import mongoose from 'mongoose';

// required format to save to mongodb
type BookModel = mongoose.Document & {
    title: string;
    isbn: string;
    author: string;
    picture: string;
    price: number;
};

// required format to save to mongodb
const schema = new mongoose.Schema({
    title: { type: String, required: true },
    isbn: { type: String, required: true },
    author: { type: String, required: true },
    picture: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
});

// create variable in mongodb format as specified above
const Book = mongoose.model<BookModel>('Book', schema);

// create new object to export to controller, ready to submit and to save to mongodb when sent to db as a request in controller
export const addBook = (title: string, isbn: string, author: string, picture: string, price: number) => {
    new Book({ title, isbn, author, picture, price }).save();
};

export const fetchBooks = async () => await Book.find({});