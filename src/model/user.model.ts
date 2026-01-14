import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser extends Document {
    username: string;
    email: string;
    code: number;
    language_preference?: string;
}

const UserSchema: Schema<IUser> = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    code: { type: Number, required: true },
    language_preference: { type: String, default: "hi" }
});

const UserModel: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default UserModel;