import mongoose from 'mongoose';

type CardModel = mongoose.Document & {
    title: string;
    material: string;
    picture: string;
    price: number;
};

// Build a schema and use it to do the validation
const schema = new mongoose.Schema({
    title: { type: String, required: true },
    material: { type: String, required: true },
    //Should do validation for the picture url here
    picture: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
});

const Card = mongoose.model<CardModel>('card', schema);

// Create a new card in the database
export const addCard = (title: string, material: string, picture: string, price: number) => {
    new Card({ title, material, picture, price }).save();
};
// Find a card based on the cardname
export const fetchBirthdayCards = async () => await Card.find({});


export const fetchBirthdayCard = async (id: string) => await Card.find({ _id: id });

export const updateBirthdayCard = async (
    id: string, title: string, material: string, picture: string, price: number,
) => await Card.findByIdAndUpdate(id, { title, material, picture, price});

export const deleteBirthdayCard = async (id: string) => await Card.deleteOne({ _id: id });