import mongoose from 'mongoose';

export type UserModel = mongoose.Document & {
  username: string;
  password: string;
  email:    string;
  age:      number;
};

export const schema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email:    { type: String, required: true },
  age:      { type: Number, required: true, min: 0, max: 200 },
});

const User = mongoose.model<UserModel>('User', schema);

export const createUser = (username: string, password: string, email: string, age: number ) => {
  new User({ username, password, age, email }).save();
};

export const findUser = async (username: string) => await User.findOne({ username }).select({ username: 1, email: 1 });