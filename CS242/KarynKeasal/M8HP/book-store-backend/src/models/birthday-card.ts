import mongoose from 'mongoose';

type BirthdayModel = mongoose.Document & {
    productTitle: string;
    material: string;
    picture: string;
    price: number;
};

const schema = new mongoose.Schema({
    productTitle: { type: String, required: true },
    material: { type: String, required: true },
    picture: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
});

const Birthday = mongoose.model<BirthdayModel>('Birthday', schema);

export const addBirthdayCard = (productTitle: string, material: string, picture: string, price: number) => {
    new Birthday({ productTitle, material, picture, price }).save();
};