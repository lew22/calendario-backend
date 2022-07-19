import { Controller , Get , Post , Put, Delete, Res, HttpStatus ,Body, Param, NotFoundException, Query
} from '@nestjs/common';

import { CreateEventDTO } from './dto/evento.dto';
import { EventService } from './evento.service';
@Controller('evento')
export class EventoController {

    constructor(private eventService: EventService){}

    @Post('/create')
    async createPost(@Res() res, @Body () createEventDTO: CreateEventDTO){
        const event = await this.eventService.CreateEvent(createEventDTO);
        //console.log(createEventDTO);
        res.status(HttpStatus.OK).json({
            message: 'Product Succesfully Created',
            event
        })
        
    }

    @Get('/')
    async getEvents(@Res() res){
        const events = await this.eventService.getEvents();
        return res.status(HttpStatus.OK).json({
        //message:'Hello! ',
        events})
    }

    @Get('/:eventId')
    async getEvent(@Res() res, @Param('eventId') eventId){
        const event = await this.eventService.getEvent(eventId);
        if(!event) throw new  NotFoundException('Event does not exists')
        return res.status(HttpStatus.OK).json(event);
    }

    ///:eventId
    @Delete('/delete')
    async deleteEvent(@Res() res ,@Query('eventId') eventId){
        const eventdeleted = await this.eventService.DeleteEvent(eventId)
        if(!eventdeleted) throw new NotFoundException('Event does not deleted')
        return res.status(HttpStatus.OK).json({
            message: 'Event Deleted Succesfully',
            eventdeleted
        })
    }

    @Put('/update')
    async updateEvent(@Res() res, @Body() createEventDTO: CreateEventDTO,@Param('eventId') eventId){
        const updatedEvent =await this.eventService.UpdateEvent(eventId,createEventDTO)
        if(!updatedEvent)throw new NotFoundException('Event does not updated')
        return res.status(HttpStatus.OK).json({
            message: 'Event Updated Succesfully',
            updatedEvent
        })
    }
}
