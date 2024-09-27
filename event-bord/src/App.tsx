import { Container } from '@mui/material'
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import EventPage from './components/EventPage.tsx'
import HomePage from './components/HomePage.tsx'
import NotFound from './components/NotFound.tsx'

function App() {
	return (
		<Router>
			<Container sx={{ marginTop: 5 }} maxWidth='md'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/event/:id' element={<EventPage />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Container>
		</Router>
	)
}

export default App
