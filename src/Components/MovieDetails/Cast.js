import React from 'react'
import { Image } from 'mdbreact'

const Cast = ({cast}) => {
	const leadActors = cast.slice(0, 4)
	console.log(leadActors)
	if(cast.length !== 0){
		return(
			<div className="casts">
				<h2>Cast</h2>
				<div className="cast-pics">
					{leadActors.map(actor => (
						<div>
							<img 
								src={actor.profile_path === null ? `http://via.placeholder.com/300x450` : 
									`https://image.tmdb.org/t/p/w200/${actor.image}`

								} 
							/>
							<p>{actor.actor}</p>
						</div>
					))}
			  </div>
			</div>
		)
	}
	else {
		return(
			<div className="spinner">
					<h1>Loading...</h1>
			</div>	
		)
	}
}

export default Cast