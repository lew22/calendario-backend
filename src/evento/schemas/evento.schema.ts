
import {Schema} from 'mongoose'

export const EventSchema = new Schema({
    name:{type: String , required: true },
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type EventoDocument = Evento & Document;

// @Schema()
// export class Evento {
    
//     @Prop()
//     NombreEvento: String;

//     @Prop()
//     Usuario : String;

//     @Prop()
//     Descripcion : String;

// }

// export const EventoSchema = SchemaFactory.createForClass(Evento)

