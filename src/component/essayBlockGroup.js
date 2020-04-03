import React, { Component } from 'react';
import '../css/landing.css';
import preImg from '../logo.svg'

class EssayGroup extends Component{
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="landing-item">
				<img src={preImg} alt=""/>
				<div className="essay-abstract">
					<span>{this.props.title}</span>
					<p>{this.props.abstract}</p>
				</div>
				<span className="date">{this.props.date}</span>
			</div>
		)
	}
}
export {EssayGroup};
