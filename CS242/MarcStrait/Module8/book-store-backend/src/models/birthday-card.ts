import mongoose from 'mongoose';

type BirthdayCardModel = mongoose.Document & {
    title: string;
    material: string;
    picture: string;
    price: number;
};

// Build a schema and use it to do the validation
const schema = new mongoose.Schema({
    title: { type: String, required: true },
    material: { type: String, required: true },
    picture: { type: String, required: true },
    price: { type: String, required: true, min: 0 }
});

const Card = mongoose.model<BirthdayCardModel>('Card', schema);

// Create a new card in the database
export const addBirthdayCard = (title: string, material: string, picture: string, price: number) => {
    new Card({ title, material, picture, price }).save();
}