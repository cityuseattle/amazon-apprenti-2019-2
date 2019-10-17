import mongoose from 'mongoose';

type BirthdayCardModel = mongoose.Document & {
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

const BirthdayCard = mongoose.model<BirthdayCardModel>('BirthdayCard', schema);

export const addBirthdayCard = (title: string, material: string, picture: string, price: number) => {
    new BirthdayCard({ title, material, picture, price }).save();
};
export const fetchBirthdayCards = async () => await BirthdayCard.find({});

export const fetchBirthdayCard = async(id: string) => await BirthdayCard.find({ _id: id });

export const updateBirthdayCard = async (
    id: string, title: string, material: string, picture: string, price: number,
) => await BirthdayCard.findByIdAndUpdate(id, {title, material, picture, price });

export const deleteBirthdayCard = async (id: string) => await BirthdayCard.deleteOne({ _id: id });
