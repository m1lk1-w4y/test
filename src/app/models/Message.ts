import mongoose, { Schema, model, Model } from 'mongoose';
import { IMessage } from '../interfaces';

const messageSchema = new Schema({
    email: { type: String},
    subject: { type: String},
    message: { type: String},
}, {
    timestamps: true
});

messageSchema.index({ title: 'text' });

const Message: Model<IMessage> = mongoose.models.Message || model('Message', messageSchema);

export default Message;