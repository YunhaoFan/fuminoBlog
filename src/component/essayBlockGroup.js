import React, { Component } from 'react';
import '../css/landing.css';
import preImg from '../logo.svg'
import {Redirect} from "react-router";

class EssayGroup extends Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			redirect:''
		}
	}
	// 查看详情
	async handleClick(val){
		console.log(val);
		window.localStorage.setItem('detailKey',JSON.stringify(val));
		// 路由重定向
		const redirect = (<Redirect to='/detail'/>);
		this.setState({redirect:redirect});
	}
	render() {
		return (
			<div className="landing-item" onClick={()=>this.handleClick({id:this.props.id})}>
				<img src={this.props.abstractImg} alt=""/>
				<div className="essay-abstract">
					<span>{this.props.title}</span>
					<span className="essay-tag">Tag：{this.props.tag}</span>
					<p>{this.props.abstract}</p>
				</div>
				<span className="date">{this.props.date}</span>
				{this.state.redirect}
			</div>
		)
	}
}
export {EssayGroup};
