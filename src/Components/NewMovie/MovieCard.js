import React, { Component } from 'react'
import { Card, Fa, Col } from 'mdbreact'
import { Link } from 'react-router-dom'

class MovieCard extends Component {
	constructor(props){
		super(props);
		this.state = {
			mouseHover:false
		}
	}

	handleMouseHover = () => {
		this.setState({mouseHover:!this.state.mouseHover})
	}


	render(){
		return(
			<div>
			<Link to={`/movie/${this.props.movieId}`}>
			  <Col sm className="card" >
					<Card 
							className="card-image" 
							onClick={this.viewMovieDetail}
							style={{
									 background: this.state.mouseHover ? `linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)` :
									`url( ${this.props.movieImg === null ? 'http://via.placeholder.com/300x300' : 
									`https://image.tmdb.org/t/p/w300${this.props.movieImg}`})`,
									 backgroundPosition:'center',
									 backgroundSize:'100%',
									}}
							 onMouseEnter={this.handleMouseHover}
							 onMouseLeave={this.handleMouseHover}
						>
						 	
						 {(this.state.mouseHover) ?
						 		<div 
							 	 	className="white-text text-center d-flex align-items-center  py-5 pl-2">
							  		  <div>
								     		 <h3 className="white-text">{this.props.movieTitle}</h3>
								     		 <p>{this.props.releaseDate}</p>
								     </div>
					    		</div>
							: <p></p>
						 }
					      
					</Card>
			  </Col>
			</Link>
		</div>
		)
	}
}

export default MovieCard