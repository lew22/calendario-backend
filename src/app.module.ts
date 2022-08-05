import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {EventoModule} from './evento/evento.module'
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    MongooseModule.forRoot(process.env.MONGO),
    // MongooseModule.forRoot('mongodb+srv://recursos:Multitest123@innovation.vpwic.mongodb.net/calendario?retryWrites=true&w=majority'),
    EventoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
