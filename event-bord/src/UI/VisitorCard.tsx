import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { IVisitor } from '../interfaces/interface'

interface IVisitorCard {
	visitor: IVisitor
}
const VisitorCard: React.FunctionComponent<IVisitorCard> = ({ visitor }) => {
	return (
		<Card sx={{ width: 200, background: '#a2bbb3' }}>
			<CardContent>
				<Typography
					sx={{ fontSize: 16, fontWeight: 'bold' }}
					color='text.secondary'
					gutterBottom
				>
					{visitor.fullName}
				</Typography>

				<Typography sx={{ mb: 1.5, fontSize: 10 }} color='text.secondary'>
					{visitor.email}
				</Typography>
				
				
			</CardContent>
		</Card>
	)
}
export default VisitorCard
