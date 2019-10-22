import mongoose from 'mongoose';

type CardModel = mongoose.Document & {
    title: string;
    material: string;
    picture: string;
    price: number;
};

const schema = new mongoose.Schema({
    title: { type: String, required: true },
    material: { type: String, required: true },
    picture: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
});

const Card = mongoose.model<CardModel>('Card', schema);

export const addCard = (title: string, material: string, picture: string, price: number) => {
    new Card({ title, material, picture, price }).save();
};

export const fetchCards = async () => await Card.find({});