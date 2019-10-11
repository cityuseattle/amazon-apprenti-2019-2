import mongoose from 'mongoose';

export type ProductModel = mongoose.Document & {
    title: string;
    weight: string;
    price: string;
    amount: number;
    provider: string,
};

//Build a schema and use it to do the validation
const schema = new mongoose.Schema({
    title: { type: String, required: true},
    weight: { type: String, reuired: true },
    price: { type: String, required: true},
    amount: { type: Number, required: true, min: 0, max: 200},
    provider: {type: String, required: true},
});

const Product = mongoose.model<ProductModel>('Product', schema);

//Create a new product in the database

export const createProduct = (title: string, weight: string, price: string, amount: number, provider: string ) => {
    new Product({title, weight, price, amount, provider}).save();

}; 

//Find a user based on the username

export const findProduct = async (title: string ) => await Product.findOne({ title })
    .select({ title: 1, price: 1, weight: 1 });