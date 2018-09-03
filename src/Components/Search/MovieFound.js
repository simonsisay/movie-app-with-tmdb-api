import React from 'react'

const MovieFound = (props) => {
	console.log(props)
	return(
		<div>
			<h4> {props.movieTitle} </h4>
		</div>
	)
}

export default MovieFound