import React from 'react'
import { Fa } from 'mdbreact'


const Footer = () => {
	return(
		<div className="footer">
			<h4>
				Designed and developed by 
				<a href="https://twitter.com/sisay_simon">
					<span> Simon Sisay <Fa icon={'twitter'} /></span>
				</a>
			</h4>
			<h5>
				View code on
				<a>
					<span> Github <Fa icon={'github'} /> </span>
				</a> 
			</h5>
		</div>
	)
}

export default Footer