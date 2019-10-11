import mongoose from 'mongoose'; 

export type BirthdayCardModel = mongoose.Document & {
  
  title: string; 
  material: string;
  picture: string; 
  price: number;
  id: string;
};

//Build a schema and use it to do the validation
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  material: { type: String, required: true },
  picture: { type: String, required: true },
  price: {type: Number, required: true, min: 0},
  id: {type: String, required: false },
});

const Birthdaycard = mongoose.model<BirthdayCardModel>('BirthdayCard', schema );

// Create a new user in the database
  export const addBirthdayCard = (title: string, material: string, picture: string, price: number, id: string, ) => {
  new Birthdaycard({ title, material, picture, price, id }).save();
  };

  export const fetchBirthdayCards = async () => await Birthdaycard.find({});

  export const fetchBirthdaycard = async (id: string) => await Birthdaycard.find ({ _id: id});

  export const updateBirthdaycard = async (
    id: string, title: string, material: string, picture: string, price: number, 
    ) => await Birthdaycard.findByIdAndUpdate(id, { title, material, picture, price, id });

  export const deleteBirthdaycard = async (id: string) => await Birthdaycard.deleteOne({ _id: id });

  