import mongoose from 'mongoose';

export type ProductModel = mongoose.Document & {
    title: String;
    weight: Number;
    price: Number;
    amount: Number;
    providers: Map<String, String>;
};

//Build schema
const schema = new mongoose.Schema ({
    title: {type: String, required: true},
    weight: {type: Number, required: true},
    price: {type: Number, required: true},
    amount: {type: Number, required: true, min: 1},
    providers: {type: Map, of: String}
});

const Product = mongoose.model<ProductModel>('Product', schema);

export const createProduct = (title: string, weight: number, price: number, amount: number, providers: Map<string, string>) => {
    new Product({ title, weight, price, amount, providers}).save();
};

//Find a product based on title
export const findProduct = async (title: string) => await Product.findOne({ title }).select({ title: 1, weight: 2, price: 3, amount: 4, providers: 5});