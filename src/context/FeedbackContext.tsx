import { createContext, useState } from 'react'
import { nanoid } from 'nanoid'
interface FeedbackInterface {
	feedback: any
	deleteFeedback: any
	addFeedback: any
}

const FeedbackContext = createContext<FeedbackInterface>({
	feedback: null,
	deleteFeedback: null,
	addFeedback: null,
})

export const FeedbackProvider = ({ children }: { children: any }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'This is review nr 1',
			rating: 10,
		},
		{
			id: 2,
			text: 'This is review nr 2',
			rating: 5,
		},
		{
			id: 3,
			text: 'This is review nr 3',
			rating: 6,
		},
	])

	const deleteFeedback = (id: any) => {
		if (window.confirm('Ar U sure to delete this feedback??')) {
			setFeedback(feedback.filter(item => item.id !== id))
		}
	}

	const addFeedback = (newFeedback: any) => {
		newFeedback.id = nanoid()
		setFeedback([...feedback, newFeedback])
		console.log(newFeedback)
	}

	return (
		<FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>{children}</FeedbackContext.Provider>
	)
}
export default FeedbackContext
