import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'

export default function FeedbackItem({ item, handleDelete }: { item: any, handleDelete:any }) {
	

	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<button className='close' onClick={() => handleDelete(item.id)}>
				<FaTimes />
			</button>
			<div className='text-display'>{item.text}</div>
		</Card>
	)
}
