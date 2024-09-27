import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpStatus,
} from '@nestjs/common'
import { Response } from 'express'
import { ValidationError } from 'sequelize'

@Catch(ValidationError)
export class UniqueConstraintFilter implements ExceptionFilter {
	catch(exception: ValidationError, host: ArgumentsHost) {
		const ctx = host.switchToHttp()
		const response = ctx.getResponse<Response>()

		response.status(HttpStatus.BAD_REQUEST).json({
			statusCode: HttpStatus.BAD_REQUEST,
			message: "You've already registered for the event.",
		})
	}
}
