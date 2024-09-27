import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize'
import { CreateEventDto } from './dto/create-event.dto'
import { UpdateEventDto } from './dto/update-event.dto'
import { Event } from './event.model'
import { Cron } from '@nestjs/schedule'
import axios from 'axios'

@Injectable()
export class EventsService {
	constructor(
		@InjectModel(Event)
		private eventRepository: typeof Event
	) {}

	async createEvent(dto: CreateEventDto) {
		const event = await this.eventRepository.create(dto)
		console.log('Event created successfully')
		return event
	}

	async getAllEvents() {
		const events = await this.eventRepository.findAll({
			include: { all: true },
		})
		return events
	}
	async getEventId(id) {
		const event = await this.eventRepository.findByPk(id, {
			include: { all: true },
		})
		return event
	}
	async getPageEvents(page: number, sortField: string = 'dateEvent', sortDirection: 'ASC' | 'DESC' = 'ASC') {
    const limit = 9;
    const offset = (page - 1) * limit;

    // Ограничим возможные поля для сортировки
    const sortableFields = ['title', 'dateEvent', 'eventOrganizer'];

    // Проверим, чтобы поле сортировки было разрешено
    if (!sortableFields.includes(sortField)) {
        throw new Error('Invalid sort field');
    }

    // Получение событий с сортировкой
    const events = await this.eventRepository.findAll({
        order: [[sortField, sortDirection]],
        limit,
        offset,
    });

    const totalEventsCount = await this.eventRepository.count();

    const pageQty = Math.ceil(totalEventsCount / limit);

    return {
        pageQty: pageQty,
        page: page,
        currentPageEvents: events,
    };
}

	async getEventById(id: number) {
		const event = await this.eventRepository.findByPk(id, {
			include: { all: true },
		})
		return event
	}

	async updateEvent(id: number, dto: UpdateEventDto) {
		await this.eventRepository.update(dto, { where: { id } })
		const updatedEvent = await this.getEventById(id)
		return updatedEvent
	}

	async deleteEvent(id: number) {
		const deletedEvent = await this.getEventById(id)
		await this.eventRepository.destroy({ where: { id } })
		return deletedEvent
	}
	 @Cron('45 * * * * *')
	 async getRandomEvent() {
		


		 const maxOffset = 99;
		 const randomOffset = Math.floor(Math.random() * maxOffset);
  const apiKey = 'UhkuhgbQwGyrBE2mcAUWunUOND9nnp4o';
  const url =  `https://app.ticketmaster.com/discovery/v2/events.json?apikey=UhkuhgbQwGyrBE2mcAUWunUOND9nnp4o&size=100`

  try {
	  const response = await axios.get(url);
	  console.log(randomOffset)
	  const event = response.data._embedded.events[randomOffset];
	  const eventData: CreateEventDto = {
		  title: event.name,
		  description: event.url,
		  dateEvent: new Date(event.dates.start.localDate),
		  eventOrganizer: event.promoter.name,
	  }
	  await this.createEvent(eventData)
	  
	  console.log('Called when the current second is 45');
    return event;
  } catch (error) {
    console.error('Error fetching event:', error);
	  }
		 
		 
}
    
  
}
