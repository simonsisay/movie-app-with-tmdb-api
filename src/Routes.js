import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './Components/App'
import MovieDetails from './Components/MovieDetails/MovieDetails'
import NotFound from './Components/404'


const Routes = () => {
	return(
		<div>
			<Switch>
				<Route path="/" component={App} exact={true} />
				<Route path="/movie/:id" component={ MovieDetails } />
				<Route component={ NotFound } />
			</Switch>
		</div>
	)
}

export default Routes