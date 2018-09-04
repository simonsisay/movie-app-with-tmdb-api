import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return(
		<div className="not-found-page">
			<h1>Page not found</h1>
			<Link to={'/'}>Go Home</Link>
		</div>
	)
}

export default NotFound