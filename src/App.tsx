import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'

import FeedbackData from './data/FeedbackData'

interface feddbackInter {
	id: number
	rating: number
	text: string
}

function App(props: any) {
	const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id:any) => { console.log("Numer to" , id)}
	return (
		<>
			<Header text={'allo dupa'}></Header>
			<div className='container'>
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	)
}

export default App
