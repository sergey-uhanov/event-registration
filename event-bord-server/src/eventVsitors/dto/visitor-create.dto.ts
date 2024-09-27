import { IsNotEmpty, IsString } from 'class-validator'

export class CreateVisitorDto {
	@IsString()
	@IsNotEmpty()
	readonly fullName: string

	@IsString()
	@IsNotEmpty()
	readonly email: string

	@IsString()
	@IsNotEmpty()
	readonly dateBirth: string

	@IsString()
	@IsNotEmpty()
	readonly whereHearEvent: string
}
