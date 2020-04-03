import React, { Component } from 'react';
import '../css/landing.css';

class Landing extends Component{
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="landing-container">
				<div className="landing-item">1</div>
				<div className="landing-item">2</div>
				<div className="landing-item">3</div>
				<div className="landing-item">4</div>
				<div className="landing-item">5</div>
				<div className="landing-item">6</div>
				<div className="landing-item">7</div>
				<div className="landing-item">8</div>
			</div>
		)
	}
}

export {Landing};
