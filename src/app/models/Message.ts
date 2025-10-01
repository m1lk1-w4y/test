import mongoose, { Schema, model, Model } from 'mongoose';

const messageSchema = new Schema({
    email: { type: String },
    subject: { type: String },
    message: { type: String },
}, {
    timestamps: true
});

messageSchema.index({ title: 'text' });

const Message = mongoose.model('Message', messageSchema);

export default Message;