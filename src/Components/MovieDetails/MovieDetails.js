import React, { Component } from 'react'
import axios from 'axios'
import DetailsCard from './DetailsCard'
import PosterCard from './PosterCard'
import Cast from './Cast'
import { ApiKey } from '../../config'
import { Link } from 'react-router-dom'
import './detail.css'
import Footer from '../Footer'


class MovieDetials extends Component{
	constructor(props){
		super(props);
		this.state = {
			title:'',
			rating:'',
			genres:[],
			overview:'',
			poster:'',
			releaseDate:'',
			cast:[]
		}
	}

	componentWillMount(){
		const movieId = this.props.match.params.id;
		axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApiKey}&language=en-US&append_to_response=credits`)
		.then( ({ data }) => {
			console.log(data)
			this.setState({
				title:data.title,
				rating:data.vote_average,
				poster:data.poster_path,
				overview:data.overview,
				releaseDate:data.release_date,
				cast:data.credits.cast.map(cast => {
					return {actor:cast.name, image:cast.profile_path};
				}),
				genres:data.genres.map(genre => {
					return genre.name;
				})
			})
			console.log(this.state)
		})
	}
	render(){
		if(this.state.title){
			return(
				<div>
					<Link to={'/'}><h1 className="header-detail"> Orit Movies </h1></Link>
					<div className="movie-detail">

						<PosterCard 
							title={this.state.title}
							posterImg={this.state.poster}
						/>
						<DetailsCard
							title={this.state.title}
							rating={this.state.rating}
							genres={this.state.genres}
							releaseDate={this.state.releaseDate}
							overview={this.state.overview}
							poster={this.state.poster}
						/>
						<Cast cast={this.state.cast}/>

					</div>
					<Footer />
				</div>

			)
		}
		else {
			return (
				<div>
					<Link to={'/'}><h1 className="header-detail"> Orit Movies </h1></Link>
					<div className="spinner">
						<h1>Loading...</h1>
					</div>
				</div>
			)
		}
	}
}

export default MovieDetials