import React from 'react'
import { Card } from 'mdbreact'


const PosterCard = ({posterImg, title}) => {
	return(
		<div className="poster">
				<img 
					src={posterImg === null ? `http://via.placeholder.com/300x450` : 
						`https://image.tmdb.org/t/p/w300${posterImg}`
					} 
					className="img-fluid" 
					alt={`${title}`}
				/>
		</div>
	)
}

export default PosterCard