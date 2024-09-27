import { IsInt, IsNotEmpty, IsString, IsDate  } from 'class-validator'

export class CreateEventDto {
	@IsInt()
	@IsString()
	@IsNotEmpty()
	readonly title: string

	@IsString()
	@IsNotEmpty()
	readonly description: string

	@IsDate()
	@IsNotEmpty()
	readonly dateEvent: Date

	@IsString()
	@IsNotEmpty()
	readonly eventOrganizer: string
	
}
