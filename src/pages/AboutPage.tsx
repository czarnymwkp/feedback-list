import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
export default function AboutPage() {
	return (
		<>
			<Card>
				<h2>This is Review site</h2>
				<h4>An application for adding a rating to the latest movies and series</h4>
			</Card>
			<Link to={'/'}>
				<h2>Back to home page</h2>
			</Link>
		</>
	)
}
