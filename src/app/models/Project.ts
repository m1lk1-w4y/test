import mongoose, { Schema, model, Model } from 'mongoose';

const projectSchema = new Schema({
    image: { type: String },
    title: { type: String },
    description: { type: String },
    github: { type: String },
    web: { type: String },
    tag1: { type: String, default: "All" },
    tag2: { type: String }
}, {
    timestamps: true
});

projectSchema.index({ title: 'text' });

const Project = mongoose.model('Project', projectSchema);

export default Project;