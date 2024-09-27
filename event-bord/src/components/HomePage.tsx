import { Box, FormControl, MenuItem, Select, Stack } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import EventCard from '../UI/EventCard.tsx'
import BASE_URL from '../api/apiURL.ts'
import { Ievents } from '../interfaces/interface.ts'

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
	const [events, setEvents] = useState<Ievents[]>([])
	const [page, setPage] = useState(1)
	const [pageQty, setPageQty] = useState(1)
	const [isLoading, setIsLoading] = useState(false)
	const [sortOption, setSortOption] = useState<string>('dateEvent_DESC') 
	const loaderRef = useRef<HTMLDivElement>(null) 

	
	const fetchEvents = async (pageNum: number, reset = false) => {
		setIsLoading(true)
		try {
			const [sortField, sortDirection] = sortOption.split('_')
			const { data } = await axios.get(`${BASE_URL}events?page=${pageNum}&sortField=${sortField}&sortDirection=${sortDirection}`)

			
			if (reset) {
				setEvents(data.currentPageEvents)
			} else {
				setEvents(prevEvents => [...prevEvents, ...data.currentPageEvents])
			}
			setPageQty(data.pageQty)
		} catch (error) {
			console.error('Error fetching events:', error)
		}
		setIsLoading(false)
	}

	
	useEffect(() => {
		setPage(1)
		fetchEvents(1, true)
	}, [sortOption])

	
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const firstEntry = entries[0]
				if (firstEntry.isIntersecting && page < pageQty && !isLoading) {
					console.log('Loading more events')
					setPage(prevPage => prevPage + 1)
					
				}
			},
			{ threshold: 0.9 } 
		)
		if (loaderRef.current) {
			observer.observe(loaderRef.current)
		}

		
		return () => {
			if (loaderRef.current) {
				observer.unobserve(loaderRef.current)
			}
		}
	}, [page, pageQty, isLoading])

	
	useEffect(() => {
		if (page > 1) {
			fetchEvents(page)
		}
	}, [page])

	return (
		<div>
			<h1>Event list</h1>			
			<FormControl
				sx={{ width: '300px', color: '#0f1214', marginBottom: '20px', transition: 'all 0.3s ease-in-out',  }}  >
				
				<Select
					
					value={sortOption}
					onChange={(e) => setSortOption(e.target.value as string)}					
					sx={{  color: '#0f1214' ,  borderRadius: '5px', paddingLeft: '5px', transition: 'all 0.3s ease-in-out' , outline: 'none', }}
				>
					<MenuItem  value='dateEvent_ASC'>Event Date (Ascending)</MenuItem>
					<MenuItem value='dateEvent_DESC'>Event Date (Descending)</MenuItem>
					<MenuItem value='title_ASC'>Title (Ascending)</MenuItem>
					<MenuItem value='title_DESC'>Title (Descending)</MenuItem>
					<MenuItem value='eventOrganizer_ASC'>Organizer (Ascending)</MenuItem>
					<MenuItem value='eventOrganizer_DESC'>Organizer (Descending)</MenuItem>
				</Select>
			</FormControl>		
		
			<Stack  >
				{events && events.map(event => (
					<EventCard key={event.id} event={event} />
				))}
			</Stack>			
			<Box ref={loaderRef}  sx={{ height: '100px', display: 'flex', justifyContent: 'center',}}>
				{isLoading && <CircularProgress />}
			</Box>
		</div>
	)
}

export default HomePage
