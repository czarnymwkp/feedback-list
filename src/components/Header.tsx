import React from 'react'

export default function Header({ text }: { text: string }) {
	return (
		<div className='container' style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: '#ff6a95' }}>
			<h2>Feeback Ui {text}</h2>
		</div>
	)
}
