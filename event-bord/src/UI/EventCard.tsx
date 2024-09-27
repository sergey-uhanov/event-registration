import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import Link from '@mui/material/Link';
import RegistrModal from '../components/RegisterModal.tsx'
import { Ievents } from '../interfaces/interface.ts'

interface EventCardProps {
	event: Ievents
}
const EventCard: React.FC<EventCardProps> = ({ event }) => {
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const card = (
		<>
			<div style={{ display: 'flex', justifyContent:'space-between' }}>
				<CardContent  sx={{ flexGrow: 1, width: '100%' }}>
					<Typography
						sx={{ fontSize: 14 }}
						color='text.secondary'
						gutterBottom
					></Typography>
					
					<Typography sx={{ mb: 1.5 }} color='text.secondary'>
						{event.title}
					</Typography>
					<Typography variant='body2'>
						{event.description}
					</Typography>
				</CardContent>
				<CardActions style={{ display: 'flex',   }}>
					<Button variant='contained' onClick={handleOpen} size='small'>
						Registr
					</Button>
					<Button size='small'>						
						<Link
  href={`/event/${event.id}`}
  sx={{
    color: "blue",
    "&:visited": {
      color: "blue", 
    },
  }}
>
  View
</Link>
					</Button>
				</CardActions>
			</div>
			<RegistrModal event={event} open={open} handleClose={handleClose} />
		</>
	)

	return (
		<Box sx={{  }}>
			<Card variant='outlined'
				sx={{ backgroundColor: '#90b0cf', height: '100px', display: 'flex', flexDirection: 'column',marginBottom: '10px', }}>
				{card}
			</Card>
		</Box>
	)
}
export default EventCard
