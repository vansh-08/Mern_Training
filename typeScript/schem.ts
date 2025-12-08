import mongoose from 'mongoose';

// Document interface for type-checking (optional but recommended)
interface IUserDocument extends mongoose.Document {
  name: string;
  email: string;
  age?: number;
}

// Mongoose schema for runtime validation and database modeling
const UserSchema = new mongoose.Schema<IUserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0 },
});

const UserModel = mongoose.model<IUserDocument>('User', UserSchema);

// This data will be validated against the schema at runtime
const userData = {
  name: "Charlie",
  email: "charlie@example.com",
  age: 30,
};