import mongoose from "mongoose";

export interface User extends mongoose.Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: [true, "Please provide a name for this pet."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email."],
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
  },
});

const User = mongoose.models.User || mongoose.model<User>("user", UserSchema);
export default User;
