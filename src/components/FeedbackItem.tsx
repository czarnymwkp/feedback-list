import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


export default function FeedbackItem({ item, }: { item: any}) {
	const { deleteFeedback} = useContext(FeedbackContext)

	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<button className='close' onClick={() => deleteFeedback(item.id)}>
				<FaTimes />
			</button>
			<div className='text-display'>{item.text}</div>
		</Card>
	)
}
