import { Controller , Get , Post , Put, Delete, Res, HttpStatus ,Body, Param, NotFoundException, Query
} from '@nestjs/common';
import mongoose from 'mongoose';

import { CreateEventDTO } from './dto/evento.dto';
import { EventService } from './evento.service';
@Controller('evento')
export class EventoController {

    constructor(private eventService: EventService){}

    @Post('/create')
    async createPost(@Res() res, @Body () createEventDTO: CreateEventDTO){
        const event = await this.eventService.CreateEvent(createEventDTO);
        // console.log(createEventDTO);
        res.status(HttpStatus.OK).json({
            message: 'Event Succesfully Created',
            event
        })
        
    }

    @Get('/')
    async getEvents(@Res() res){
        const events = await this.eventService.getEvents();
        //var datos = JSON.stringify(events);
        return res.status(HttpStatus.OK).json({body:events});
    }

    @Get('/:eventId')
    async getEvent(@Res() res, @Param('eventId') eventId){
        if(mongoose.Types.ObjectId.isValid(eventId)){
            // console.log("EventId valid")
            const event = await this.eventService.getEvent(eventId);
            // if(!event) throw new  NotFoundException('Event does not exists')
            return res.status(HttpStatus.OK).json(event);
        }else{
            console.log("There was a problem with the id")
        }

    }

    ///:eventId
    @Delete('/delete/:eventId')
    async deleteEvent(@Res() res ,@Param('eventId') eventId){
        if(mongoose.Types.ObjectId.isValid(eventId)){
            // console.log("EventId valido")
            const eventdeleted = await this.eventService.DeleteEvent(eventId)
            // console.log(eventdeleted)
        return res.status(HttpStatus.OK).json({
            message: 'Event Deleted Succesfully',
            eventdeleted
        })
        }else{
            console.log("There was a problem with the id")
        }
        // const eventdeleted = await this.eventService.DeleteEvent(eventId)
        // if(!eventdeleted) throw new NotFoundException('Event does not deleted')
        // return res.status(HttpStatus.OK).json({
        //     message: 'Event Deleted Succesfully',
        //     eventdeleted
        // })
    }

    @Put('/update/:eventId')
    async updateEvent(@Res() res, @Body() createEventDTO: CreateEventDTO,@Param('eventId') eventId){

        if(mongoose.Types.ObjectId.isValid(eventId)){
            // console.log("EventId valido")
            const updatedEvent =await this.eventService.UpdateEvent(eventId,createEventDTO)
            // console.log(updatedEvent)
            return res.status(HttpStatus.OK).json({
                message: 'Event Updated Succesfully',
                updatedEvent
            })
        }else{
            console.log("There was a problem with the id")
        }
        
        // const updatedEvent =await this.eventService.UpdateEvent(eventId,createEventDTO)
        // if(!updatedEvent)throw new NotFoundException('Event does not updated')
        // return res.status(HttpStatus.OK).json({
        //     message: 'Event Updated Succesfully',
        //     updatedEvent
        // })
    }
}
