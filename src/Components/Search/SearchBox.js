import React, { Component } from 'react'
import { Input, Col } from 'mdbreact'


class SearchBox extends Component {
	render(){
		return (
			<div className="search-box">
					<Input 
						className="input"
						label="Search movies" 
						type="search"
						name="movieSearch" 
						value={this.props.value}  
						icon="search" 
						onChange={this.props.handleChange}
					/>
			</div>
		)
	}
}

export default SearchBox