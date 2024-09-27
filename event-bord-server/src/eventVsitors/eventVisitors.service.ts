import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateVisitorDto } from './dto/visitor-create.dto'
import { Visitor } from './eventVisitors.model'
import { Op,Sequelize } from 'sequelize'

@Injectable()
export class VisitorsService {
	constructor(
		@InjectModel(Visitor)
		private VisitorRepository: typeof Visitor
	) {}

	async createVisitor(dto: CreateVisitorDto) {
		const visitor = await this.VisitorRepository.create(dto)
		return visitor
	}

	async getVisitors() {
		const visitors = await this.VisitorRepository.findAll()
		return visitors
	}
	async getVisitorsEventIdAndSearched(id: number, searchString?: string, typeSearch: 'email' | 'fullName' = 'email') {
    
    const whereCondition: any = {
        idEvent: id,
    }  
    if (searchString) {
        
        whereCondition[typeSearch] = {
            [Op.like]: `%${searchString}%`, 
        }
    }
    
    const visitors = await this.VisitorRepository.findAll({
        where: whereCondition,
    })

    return visitors
}
 async getRegistrationsByDay(eventId: number) {
    const registrations = await this.VisitorRepository.findAll({
      attributes: [
        [Sequelize.fn('DATE', Sequelize.col('createdAt')), 'date'], 
        [Sequelize.fn('COUNT', Sequelize.col('id')), 'count'] 
      ],
      where: {
        idEvent: eventId
      },
      group: [Sequelize.fn('DATE', Sequelize.col('createdAt'))], 
      order: [[Sequelize.fn('DATE', Sequelize.col('createdAt')), 'ASC']], 
    });

    return registrations.map(registration => ({
      date: (registration.getDataValue('date') as string), 
      count: (registration.getDataValue('count') as number)
    }));
  }
}
