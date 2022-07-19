import { Module } from '@nestjs/common';
import { EventoController } from './evento.controller';
import { EventService } from './evento.service';
import { MongooseModule } from '@nestjs/mongoose'
import {EventSchema} from './schemas/evento.schema'
@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'Event', schema:EventSchema}
        ]),
    ],
    controllers: [EventoController],
    providers: [EventService]
})
export class EventoModule {}