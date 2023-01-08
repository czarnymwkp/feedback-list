import React from 'react'
import { useContext } from 'react'

import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackStats() {
	// usuing reduce function on array (acc -accumulat)
	const { feedback } = useContext(FeedbackContext)
	let avarage: any =
		feedback.reduce((acc: number, currentValue: any) => {
			return acc + currentValue.rating
		}, 0) / feedback.length
	avarage = avarage.toFixed(1).replace(/[.,]0$/, '')
	// (/[.,]0$/, '' ) remove 0
	return (
		<div className='feedback-stats'>
			{' '}
			<h2>How many reviews : {feedback.length}</h2>
			<h4>Avarage rating : {isNaN(avarage) ? 0 : avarage}</h4>
		</div>
	)
}
