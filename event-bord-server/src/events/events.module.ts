import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { Event } from './event.model'
import { EventsController } from './events.controller'
import { EventsService } from './events.service'
import { Visitor } from 'src/eventVsitors/eventVisitors.model'

@Module({
	imports: [SequelizeModule.forFeature([Event, Visitor])],
	controllers: [EventsController],
	providers: [EventsService],
	exports: [EventsService],
})
export class EventsModule {}
