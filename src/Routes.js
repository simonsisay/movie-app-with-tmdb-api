import React from 'react'
import { Route } from 'react-router-dom'
import App from './Components/App'
import MovieDetails from './Components/MovieDetails/MovieDetails'

const Routes = () => {
	return(
		<div>
			<Route path="/" component={App} exact />
			<Route path="/:id" component={ MovieDetails } />
		</div>
	)
}

export default Routes