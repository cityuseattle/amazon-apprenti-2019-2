import mongoose from 'mongoose';

type CardModel = mongoose.Document & {
    title: string;
    material: string;
    picture: string;
    price: number;
};

//Schema time
const schema = new mongoose.Schema({
    title:
        { type: String,
         required: true },
    material:
        { type: String, 
        required: true },
    //validation for picture URL
    picture:
        { type: String,
         required: true },
    price:
        { type: Number, 
        required: true, 
        min: 0 },
});

const Card = mongoose.model<CardModel>('Card', schema);

//create Card in DB
export const addCard = (title: string, material: string, picture: string, price: number) => {
  new Card({title, material, picture, price}).save();
};
export const updateCard = async (
    id: string, title: string, material: string, picture: string, price: number,
) => await Card.findByIdAndUpdate(id, {title, material, picture, price});

export const deleteCard = async (id: string) => await Card.deleteOne({_id: id});

export const fetchCard = async (id: string) => await Card.find({_id: id });

export const fetchCards = async () => await Card.find({});