import React from 'react'
import { Card, CardText } from 'mdbreact'


const DetailsCard = ({releaseDate, rating, title, genres, overview}) => {
	return(
		<div className="details">
			<div className="small-card">
				<h1><span>Title : </span>{title}</h1>
			</div>
			<div className="small-card overview">
				<h5><span>Overview : </span>{overview}</h5>
			</div>
			<div className="small-card">
				<h5><span>Release date : </span>{releaseDate}</h5>
			</div>
			<div className="small-card">
				<h5> <span> Rating : </span> {rating} </h5>
			</div>
			<div className="small-card">
				<h5> <span >Genres : </span> {genres[0]} </h5>
			</div> 
	  </div>
	)
}

export default DetailsCard