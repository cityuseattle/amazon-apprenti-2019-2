import mongoose from 'mongoose';

type CardModel = mongoose.Document & {
    title: string;
    material: string;
    picture: string;
    price: number;
};

// Build a schema and use it to do the validation
const schema = new mongoose.Schema({
    title: {type: String, required: true},
    material: {type: String, required: true},
    // Should do validation for the picture url here
    picture: {type: String, required: true},
    price: {type: Number, required: true},
});

const Card = mongoose.model<CardModel>('Card', schema);

// Create a new card in the database
export const addCard = (title:string, material:string, picture:string, price:number) => {
    new Card({ title, material, picture, price }).save();
};

// Find a user based on the username
export const fetchCards = async () => await Card.find({});