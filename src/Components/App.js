import React, { Component } from 'react'
import Header from './Header'
import SearchBox from './Search/SearchBox'
import SearchList from './Search/SearchList'
import NewMovieList from './NewMovie/NewMovieList'
import Footer from './Footer'
import axios from 'axios'
import { ApiKey } from '../config'
import './index.css'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			latestMovies:[],
			searchInput:'',
			searchResult:[],
			openSearchList:false
		}
	}


	componentDidMount(){

		let todayDate = new Date();
    	let today = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
    	let oneMonthAgo = (todayDate.getMonth() === 0 ? todayDate.getFullYear() - 1 : todayDate.getFullYear()) + '-' + (todayDate.getMonth() === 0 ? todayDate.getMonth() + 12 : todayDate.getMonth()) + '-' + todayDate.getDate();

		axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&primary_release_date.gte=${oneMonthAgo}&primary_release_date.lte=${today}`)
		.then(response => {
			this.setState({latestMovies:response.data.results})
		})
		.catch(error => console.log('fetching', error))
	}


	handleChange = (event) => {
		this.setState({searchInput:event.target.value})
		this.getSearchResults(this.state.searchInput)
	}



	getSearchResults = (input) => {
		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${input}&page=1&include_adult=true`)
		.then(response => {
			this.setState({
			 searchResult:response.data.results,
			 openSearchList:this.state.searchInput.length !== 0 ? true : false
			})
		})

	}


	render(){
		return (
			<div className="container">
					<Header />
					<SearchBox 
						moviesFound={ this.state.searchResult } 
						value={this.state.searchInput} 
						handleChange={this.handleChange}
					/>

					{this.state.openSearchList === true || this.state.searchInput.length !== 0 ?
						<SearchList  
							searchResult={this.state.searchResult} /> :
						<NewMovieList movies={ this.state.latestMovies } />
					}
					<Footer />
			</div>
		)
	}
}

export default App