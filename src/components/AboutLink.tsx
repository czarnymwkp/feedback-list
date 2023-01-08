import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function AboutLink() {
	return (
		<div className='about-link' style={{ marginTop: '50px' }}>
			<Link to={'/about'}>
				<FaQuestion size={40} />{' '}
			</Link>
		</div>
	)
}
