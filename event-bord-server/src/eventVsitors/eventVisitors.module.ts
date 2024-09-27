import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Visitor } from './eventVisitors.model'
import { VisitorsService } from './eventVisitors.service'
import { VisitorsController } from './visitors.controller'

@Module({
	imports: [SequelizeModule.forFeature([Visitor])],
	controllers: [VisitorsController],
	providers: [VisitorsService],
	exports: [VisitorsService],
})
export class VisitorsModule {}
