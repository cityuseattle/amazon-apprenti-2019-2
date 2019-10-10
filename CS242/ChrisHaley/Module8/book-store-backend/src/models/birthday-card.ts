import mongoose from 'mongoose';

type BirthdayCardModel = mongoose.Document & {
    title: string;
    material: string;
    picture: string;
    price: number;
};

//Build a schema and use it to do the validation
const schema = new mongoose.Schema ({
    title: { type: String, required: true },
    material: { type: String, required: true },
    //Shoud do validation for the picture url here
    picture: { type: String, required: true},
    price: { type: Number, required: true, min: 0},
});

const Card = mongoose.model<BirthdayCardModel>('Card', schema);

//Create a new book in the databaes
export const addBirthdayCard = (title: string, material: string, picture: string, price: number) => {
    new Card({title, material, picture, price }).save(); 
};

//Find a birthday card based on the card name
export const fetchBirthdayCards = async () => await Card.find({});

export const fetchBirthdayCard = async (id: string) => await Card.find({ _id: id });

export const updateCard = async (
    id: string, title: string, material: string, picture: string, price: number,
) => await Card.findByIdAndUpdate(id, { title, material, picture, price });

export const deleteCard = async (id: string) => await Card.deleteOne({ _id: id });