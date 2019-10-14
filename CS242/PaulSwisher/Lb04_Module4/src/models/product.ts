import mongoose from 'mongoose';

export type ProductModel = mongoose.Document & {
  title:    string;
  weight:   number;
  price:    number;
  ammount:  number;
};

// Build a schema and use it to do the validation
const schema = new mongoose.Schema({
    title: { type: String, required: true },
    weight: { type: Number, required: 0}, 
    price: { type: Number, required: 0},
    amount : { type: Number, required: 1},
    providers: { type: Map, of: String },    
});

const User = mongoose.model<ProductModel>('Product', schema);

// Create a new user in the database
export const createProduct = (title: String, weight: Number, price: Number, amount: Number, providers: String ) => {
new User({ title, weight, price, amount, providers }).save();
};

// Find a user based on the username
export const findProduct = async (title: string) => await User.findOne({ title }).select({ title: 1, price: 1 });


