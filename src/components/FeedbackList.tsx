import React from 'react'
import FeedbackItem from './FeedbackItem'
export default function FeedbackList({ feedback, handleDelete }: { feedback: any; handleDelete: any }) {
	if (!feedback || feedback === 0) {
		return <p>No feedbback!!</p>
	}
	return (
		<div className='feedback-list'>
			{feedback.map((item: any) => (
				<FeedbackItem key={item.id} item={item} handleDelete={handleDelete}></FeedbackItem>
			))}
		</div>
	)
}
