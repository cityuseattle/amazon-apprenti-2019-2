import mongoose from 'mongoose';

type BookModel = mongoose.Document & {
    title: string;
    isbn: string;
    author: string;
    picture: string;
    price: number;
};

const schema = new mongoose.Schema({
    title: { type: String, required: true},
    isbn: { type: String, required: true },
    author: { type: String, required: true},
    picture: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },

});

const Book= mongoose.model<BookModel>('Book', schema);

export const addBook = (title: string, isbn: string, author: string, picture: string, price: number) => {
    new Book({ title, isbn, author, picture, price }).save();
};