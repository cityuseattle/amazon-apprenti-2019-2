import mongoose from 'mongoose';

export type UserModel = mongoose.Document & {
  title: string;
  weight: number;
  price: number;
  amount: number;
  providers: Map<String, String>;
};

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  weight: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0 },
  amount: { type: Number, required: true, min: 1 },
  providers: { type: Map, of: String, required: true }
});

const Product = mongoose.model<UserModel>('product', schema);

export const createProduct = (title: string, weight: number, price: number, amount: number, providers: Map<String, String> ) => {
  new Product({ title, weight, price, amount, providers }).save();
};

export const findProduct = async (title: string) => await Product.findOne({ title })
  .select({ title: 1, weight: 1, price: 1, amount: 1, providers: 1 });