import {
	Box,	
	InputAdornment,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material'
import axios from 'axios'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Link from '@mui/material/Link';
import VisitorCard from '../UI/VisitorCard.tsx'
import BASE_URL from '../api/apiURL.ts'
import { IVisitor, Ievents } from '../interfaces/interface.ts'
import EventRegistrationsChart from './EventRegistrationsChart.tsx'

interface EventPageProps {}

const EventPage: FunctionComponent<EventPageProps> = () => {
	const { id } = useParams<{ id: string }>()
	const [event, setEvent] = useState<Ievents | null>(null)
	const [visitors, setVisitors] = useState<IVisitor[]>([])
	const [searchString, setSearchString] = useState('')
	const [typeFieldToSearch, setTypeFieldToSearch] = useState<'fullName' | 'email'>('fullName')

	
	useEffect(() => {
		const fetchEventData = async () => {
			try {
				
				const eventResponse = await axios.get<Ievents>(`${BASE_URL}events/${id}`)
				setEvent(eventResponse.data)

				
				const visitorResponse = await axios.get<IVisitor[]>(
					`${BASE_URL}visitors/${id}?search=${searchString}&typeSearch=${typeFieldToSearch}`
				)
				setVisitors(visitorResponse.data)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchEventData()
	}, [id, searchString, typeFieldToSearch])

	
	const handleSearchChange = (e ) => {
		setSearchString(e.target.value)
	}

	
	const handleTypeSearchChange = (e) => {
		setTypeFieldToSearch(e.target.value as 'fullName' | 'email')
	}

	return (
		event && (
			<section>
				<Box mb={2}>
					<Link sx={{fontSize: '1.2rem'}} href={'/'}>Home page</Link>
					<Typography variant='h3' mt={2}>
						{event.title}
					</Typography>
					<Typography sx={{mt: 2, fontSize: '1.2rem'}}  variant='body2' >
						{event.description}
					</Typography>
				</Box>

				
				<TextField
					fullWidth
					variant='outlined'
					margin='normal'
					label='Search'
					value={searchString}
					onChange={handleSearchChange} 
					InputProps={{
						endAdornment: (
							<InputAdornment position='end' >
								<Select
									value={typeFieldToSearch}
									onChange={handleTypeSearchChange} 
									sx={{ minWidth: 100 }} 
									variant='standard'
								>
									<MenuItem value='fullName'>Name</MenuItem>
									<MenuItem value='email'>Email</MenuItem>
								</Select>
							</InputAdornment>
						),
					}}
				/>
				<EventRegistrationsChart eventId={id } />				
				<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
					{visitors.length > 0 ? (
						visitors.map(visitor => (
							<VisitorCard key={visitor.id} visitor={visitor} />
						))
					) : (
						<Typography variant='body1'>No visitors found.</Typography>
					)}
				</Box>
			</section>
		)
	)
}

export default EventPage
