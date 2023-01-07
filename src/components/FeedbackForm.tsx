import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelectComponent from './RatingSelectComponent'
import { useState } from 'react'

export default function FeedbackForm({ handleAdd }: { handleAdd: any }) {
	const [text, setText] = useState('')
	const [rating, setRating] = useState(0)
	const [btnDisabled, setBtnDisabled] = useState(false)
	const [message, setMessage] = useState('')

	const handleChange = (e: any) => {
		if (text === '') {
			setBtnDisabled(true)
			setMessage(null!)
		} else if (text !== '' && text.trim().length <= 10) {
			setMessage('Text must have minimum 10 letters')
			setBtnDisabled(true)
		} else {
			setMessage(null!)
			setBtnDisabled(false)
		}
		setText(e.target.value)
	}
	const handleSubmit = (e: any) => {
		e.preventDefault()
		if (text.trim().length > 10) {
			const newFeedback = {
				text: text,
				rating: rating,
			}
			handleAdd(newFeedback)
			setText('')
		}
	}

	console.log(text)
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>Rate us</h2>
				<RatingSelectComponent select={(rating: number) => setRating(rating)} />
				<div className='input-group'>
					<input onChange={handleChange} type='text' placeholder='Write some review' value={text} />
					<Button type='submit' version='primary' isDisabled={btnDisabled}>
						Add review
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	)
}
