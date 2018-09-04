import React, { Component } from 'react'
import MovieCard from './MovieCard'
import spinner from '../../spinner.svg'

class NewMovieList extends Component{

	render(){
		if(this.props.movies.length !== 0){
			return(
				<div className="card-list">
					<h1>New movies</h1>
					<div className="cards">
						{this.props.movies.map(movie => (
								<MovieCard 
									key={movie.id}
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
						<img src={spinner} />
				</div>
			)
		}
	}
}

export default NewMovieList