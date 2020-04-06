import React, { Component } from 'react';
import '../css/landing.css';
import {adjustBanner} from "../js/loadingEvent";

class Landing extends Component{
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="landing-container">

			</div>
		)
	}
	componentDidMount() {
		adjustBanner();
	}
}

export {Landing};
