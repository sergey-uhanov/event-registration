import { Body, Controller, Get, Param, Post, Query, UseFilters } from '@nestjs/common'

import { CreateVisitorDto } from './dto/visitor-create.dto'
import { VisitorsService } from './eventVisitors.service'
import { UniqueConstraintFilter } from 'src/unique-constraint.filter'

@Controller('visitors')
@UseFilters(UniqueConstraintFilter)
export class VisitorsController {
	constructor(private visitorService: VisitorsService) {}

	@Get()
	getVisitorsAllEvents() {
		return this.visitorService.getVisitors()
	}
	@Get(':id')
getVisitorsEventId(
    @Param('id') id: number,
    @Query('search') searchString?: string, // Используем @Query вместо @Param для параметров запроса
    @Query('typeSearch') typeSearch: 'email' | 'fullName' = 'email' // Значение по умолчанию — 'email'
) {
    return this.visitorService.getVisitorsEventIdAndSearched(id, searchString, typeSearch)
}


	@Post()
	createEvent(@Body() visitorsDto: CreateVisitorDto) {
		return this.visitorService.createVisitor(visitorsDto)
	}
	 @Get('registrations-by-day/:eventId')
  async getRegistrationsByDay(@Param('eventId') eventId: number) {
    return this.visitorService.getRegistrationsByDay(eventId);
  }
}
