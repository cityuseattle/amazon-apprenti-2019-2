import mongoose from 'mongoose'; 

export type BirthdayCardModel = mongoose.Document & {
  
  title: string; 
  material: string;
  picture: string; 
  price: number;
};

//Build a schema and use it to do the validation
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  material: { type: String, required: true },
  picture: { type: String, required: true },
  price: {type: Number, reuqired: true, min: 0}
});

const BirthdayCard = mongoose.model<BirthdayCardModel>('BirthdayCard', schema, 'users');

// Create a new user in the database
export const addBirthdayCard = (title: string, material: string, picture: string, price: number) => {
new BirthdayCard({ title, material, picture, price }).save();
};
