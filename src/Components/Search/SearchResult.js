import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class SearchResult extends Component{
	render(){
		return(
			<Link to={`/movie/${this.props.id}`}>
				<div className="search-result">
					<img 
							className="result-poster"
							src={
									this.props.poster === null ? 'http://via.placeholder.com/300x300' : 
									`https://image.tmdb.org/t/p/w200${this.props.poster}`
								}
								alt={this.props.title}
					 />
					<div className="title-and-date">
						<h5>{this.props.title}</h5>
						<p>{this.props.releaseDate}</p>
					</div>
				</div>
			</Link>
		)
	}
}

export default SearchResult