
import {Schema} from 'mongoose'

export const EventSchema = new Schema({
    name:{type: String , required: true },
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});