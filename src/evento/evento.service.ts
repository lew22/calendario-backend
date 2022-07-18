import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

import { Event } from './interfaces/evento.interface'
import { CreateEventDTO } from './dto/evento.dto';

@Injectable()
export class EventService {

    constructor(@InjectModel('Event') private readonly eventModel: Model<Event>){}

    async getEvents(): Promise<Event[]>{
        const  events = await this.eventModel.find();
        return events;
    }

    async getEvent(eventID: string): Promise<Event>{
        const event = await this.eventModel.findById(eventID);
        return event;
    }

    async CreateEvent(createEventDTO: CreateEventDTO): Promise<Event>{
        const event = new this.eventModel(createEventDTO);
        return await event.save();
    }

    async DeleteEvent(eventID: string): Promise<Event>{
        const deleteEvent = await this.eventModel.findByIdAndDelete(eventID);
        return deleteEvent;
    }

    async UpdateEvent(eventID: string,createEventDTO: CreateEventDTO): Promise<Event>{
        const updatedEventd = await this.eventModel.findByIdAndUpdate(eventID,createEventDTO,{new:true})
        return updatedEventd
    }   

}
