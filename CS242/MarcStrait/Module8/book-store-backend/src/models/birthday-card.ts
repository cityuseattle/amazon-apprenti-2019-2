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
// Find a user based on the username
export const fetchBirthdaycards = async () => await Card.find({});

export const fetchBirthdayCard = async (id: string) => await Card.find({ _id: id });

export const updateBirthdayCard = async (
    id: string, title: string, material: string, picture: string, price: number
) => await Card.findByIdAndUpdate(id, { title, material, picture, price });

export const deleteBirthdayCard = async (id: string) => await Card.deleteOne({ _id: id });