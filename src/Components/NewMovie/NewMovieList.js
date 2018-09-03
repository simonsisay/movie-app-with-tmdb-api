import React, { Component } from 'react'
import MovieCard from './MovieCard'


class NewMovieList extends Component{

	render(){
		if(this.props.movies.length !== 0){
			return(
				<div className="card-list">
					<h1>New movies</h1>
					<div className="cards">
						{this.props.movies.map(movie => (
								<MovieCard 
									movieId={movie.id} 
									movieImg={movie.poster_path}
									movieTitle={movie.title}
									handleMouseHover={this.handleMouseHover}
									releaseDate={movie.release_date}
								/>
							))
						}
					</div>
				</div>
			)
		}
		else {
			return (
				<div className="spinner">
						<h1>Loading...</h1>
				</div>
			)
		}
	}
}

export default NewMovieList