import mongoose from 'mongoose';

export type ProductModel = mongoose.Document & {
    title: string;
    price: number;
    weight: number;
    quantity: number;
    vendor: Map<String, String>;
};

// Build a schema and use it to do the validation
const schema = new mongoose.Schema({
    title: {type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    weight: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true, min: 1 },
    vendor: { type: Map, of: String },
});

const Product = mongoose.model<ProductModel>('Product', schema);

// Create a find Product in the database
export const findProduct = async (title: string) => await Product.findOne({ title })
    .select({ title: 1, price: 1, weight: 1, quantity: 1, vendor: 1 });

// Create a new Product in the database
export const createProduct = (title: string, price: number, weight: number, quantity: number, vendor: Map<String, String> ) => {
    new Product({ title, price, weight, quantity, vendor }).save();
};