import React from 'react'

export default function Button({
	children,
	version,
    type,
    isDisabled
}: {
	children: string
	version: any
	type: any
	isDisabled: boolean
}) {
	return (
		<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
			{children}
		</button>
	)
}
