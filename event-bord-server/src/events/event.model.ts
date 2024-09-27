import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import { Visitor } from 'src/eventVsitors/eventVisitors.model'



@Table({ tableName: 'event' })
export class Event extends Model<Event> {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		primaryKey: true,
		autoIncrement: true,
	})
	id: number

	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	title: string

	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	description: string

	@Column({ type: DataType.DATE, allowNull: false })
	dateEvent: Date

	@Column({ type: DataType.STRING, allowNull: false })
	eventOrganizer: string
	
	@HasMany(() => Visitor)
	visitors: Visitor[]
}
