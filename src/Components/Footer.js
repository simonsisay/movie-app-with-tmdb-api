import React from 'react'
import { Fa } from 'mdbreact'


const Footer = () => {
	return(
		<div className="footer">
			<h5>
				Designed and developed by 
				<a href="https://twitter.com/sisay_simon" target="_blank">
					<span> Simon Sisay <Fa icon={'twitter'} /></span>
				</a>
			</h5>
			<p>
				View code on
				<a href="https://github.com/simonsisay/movie-app/tree/master/src" target="_blank">
					<span> Github <Fa icon={'github'} /> </span>
				</a> 
			</p>
		</div>
	)
}

export default Footer