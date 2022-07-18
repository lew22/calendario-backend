import { Document } from "mongoose";
export interface Event extends Document {
    readonly name: string;
    readonly user: string;
    readonly description: string;
    readonly createdAt: Date;
}