import { Controller , Get , Post , Put, Delete, Res, HttpStatus
} from '@nestjs/common';


@Controller('evento')
export class EventoController {

    @Post('create')
    createPost(@Res() res){
        res.status(HttpStatus.OK).json({
            message: 'received'
        })
        
    }

}
