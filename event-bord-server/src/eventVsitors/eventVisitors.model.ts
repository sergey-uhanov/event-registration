import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { Event } from '../events/event.model'

@Table({
	tableName: 'visitors',
	indexes: [
		{
			unique: true,
			fields: ['email', 'idEvent'],
		},
	],
})
export class Visitor extends Model<Visitor> {
	public count!: number;
	public date!: string;
	
	@Column({
		type: DataType.INTEGER,
		unique: true,
		primaryKey: true,
		autoIncrement: true,
	})
	id: number

	@Column({ type: DataType.STRING, allowNull: false })
	fullName: string

	@Column({ type: DataType.STRING, allowNull: false })
	email: string

	@Column({ type: DataType.STRING, allowNull: false })
	dateBirth: string
	
	@Column({ type: DataType.STRING, allowNull: false })
	whereHearEvent: string

	@ForeignKey(() => Event)
	@Column({ type: DataType.INTEGER, allowNull: false })
	idEvent: number

	@BelongsTo(() => Event)
	event: Event

	
}
