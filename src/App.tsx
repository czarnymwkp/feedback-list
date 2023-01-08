import { useState } from 'react'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutLink from './components/AboutLink'

//pages
import AboutPage from './pages/AboutPage'
//context
import { FeedbackProvider } from './context/FeedbackContext'
function App(props: any) {
	const [feedback, setFeedback] = useState(FeedbackData)

	return (
		<FeedbackProvider>
			<div className='container'>
				<Header />
				<BrowserRouter>
					<Routes>
						<Route
							path='/'
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</>
							}></Route>
						<Route path='/about' element={<AboutPage />} />
					</Routes>
					<AboutLink />
				</BrowserRouter>
			</div>
		</FeedbackProvider>
	)
}

export default App
