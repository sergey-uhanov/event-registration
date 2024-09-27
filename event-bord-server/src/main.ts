import { NestFactory } from '@nestjs/core'
import { config } from 'dotenv'
import { AppModule } from './app.module'

async function bootstrap() {
	config()
	try {
		const PORT = process.env.PORT || 5000
		const app = await NestFactory.create(AppModule, { cors: false })
		app.enableCors()
		await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}
bootstrap()
