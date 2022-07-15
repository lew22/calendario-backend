
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventoDocument = Evento & Document;

@Schema()
export class Evento {
    
    @Prop()
    NombreEvento: String;

    @Prop()
    Usuario : String;

    @Prop()
    FechaInicio: Date;

    @Prop()
    FechaFin: Date;
}

export const EventoSchema = SchemaFactory.createForClass(Evento)