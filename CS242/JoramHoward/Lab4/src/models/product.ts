import mongoose from 'mongoose';

export type ProductModel = mongoose.Document & {
  title: string;
  weight: number;
  price: number;
  amount: number;
  providers: string;
};

// Build a schema and use it to do the validation
const schema = new mongoose.Schema({
  title: { type: String, required: true, },
  weight: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0 },
  amount: { type: Number, required: true, min: 1, },
  providers: { type: String },
});

const Product = mongoose.model<ProductModel>('Product', schema);

// Create a product in the database
export const createProduct = (title: string, weight: number, price: number, amount: number, providers: string, ) => {
  new Product({ title, weight, price, amount, providers, }).save();
};

// Find a user based on the username
export const findProduct = async (title: string) => await Product.findOne({ title })
  .select({ title: 1, });