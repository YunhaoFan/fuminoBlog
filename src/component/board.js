import React, {Component} from 'react';
import '../css/landing.css';

class Board extends Component{
	constructor(props){
		super(props);
	}
	render() {
		return(
			<div className="landing-container">
				<div style={{
					margin: '10px 10px 10px 10px',
					backgroundColor: 'rgba(61, 58, 62, 0.31)',
					boxShadow: '0 0 2px 0 rgba(128, 128, 128, 0.44)',
					flex: '0 0 500px',
					transition: 'ease-in-out 0.5s',
					animation: 'fade-in 1s',
					textAlign:'center',
					color:'white'
				}}>
					还在施工中噢~
				</div>
			</div>
		);
	}
}

export {Board};
