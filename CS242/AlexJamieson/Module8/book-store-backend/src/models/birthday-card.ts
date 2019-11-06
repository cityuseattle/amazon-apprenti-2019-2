import mongoose from 'mongoose';

type BirthdayCardModel = mongoose.Document & {
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

const BirthdayCard = mongoose.model<BirthdayCardModel>('Card', schema);

// Create a new card in the database
export const addBirthdayCard = (title:string, material:string, picture:string, price:number) => {
    new BirthdayCard({ title, material, picture, price }).save();
};

// Find a user based on the username
export const fetchBirthdayCards = async () => await BirthdayCard.find({});

export const fetchBirthdayCard = async (id: string) => await BirthdayCard.find({ _id: id });

export const updateBirthdayCard = async (
    id: string, title: string, material: string, picture: string, price: number,
) => await BirthdayCard.findByIdAndUpdate(id, { title, material, picture, price });

export const deleteBirthdayCard = async (id: string) => await BirthdayCard.deleteOne({ _id: id });