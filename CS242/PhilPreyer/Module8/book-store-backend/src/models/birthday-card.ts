import mongoose from 'mongoose';

type BirthdayCardModel = mongoose.Document & {
    title: string;
    material: string;
    picture: string;
    price: number;
}

// Build a schema and use it to do the validation
const schema = new mongoose.Schema({
    title: { type:String, required: true },
    material: { type: String, required: true },
    // Should do validation for the picture url here
    picture: { type:String, required: true},
    price: { type: Number, required: true, min: 0},
});

const BirthdayCard = mongoose.model<BirthdayCardModel>('BirtdayCard', schema);

// Create a new birtdaycard in the database
export const addBirthdayCard = (title: string, material: string, picture: string, price: number) => {
    new BirthdayCard({ title, material, picture, price }).save();
};