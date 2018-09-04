import React, { Component } from 'react'
import SearchResult from './SearchResult'
import './Search.css'
import spinner from '../../spinner.svg'

class SearchList extends Component{
	render(){
		if(this.props.searchResult.length === 0){
			return(
				<div className="spinner">
						<img src={spinner} />
				</div>
			)
		}
		else {
			return (
				<div className="search-results-container">
					{this.props.searchResult.map(movie => (
						<SearchResult 
							key={movie.id} 
							id={movie.id}
							title={movie.title} 
							poster={movie.poster_path}
							releaseDate={movie.release_date}
						/>
					))}
				</div>
			)
		}
	}
}

export default SearchList