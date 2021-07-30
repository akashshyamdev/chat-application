import { Schema } from 'mongoose';

const schema = new Schema({}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });
