import React, { Component } from 'react';
import {getDetail} from "../api/api";
import '../css/detail.css';
import {beforeLoading,afterLoading} from "../js/loadingEvent";

class Detail extends Component{
	constructor(props) {
		super(props);
		this.state={
			title:'',
			author:'',
			datetime:'',
			tag:'',
			content:''
		}
	}
	render() {
		return(
			<div className="detail-container">
				<div className="essay-content">
					<h2> {this.state.title}</h2>
					<span>Author：{this.state.author}</span>
					<span>Datetime：{this.state.datetime}</span>
					<span>Tags：{this.state.tag}</span>
					<p> {this.state.content}</p>
				</div>
			</div>
		);
	}
	async getEssayDetail(){
		try {
			beforeLoading();
			const key = window.localStorage.getItem('detailKey');
			const detail = await getDetail(JSON.parse(key));
			console.log(detail);
			this.setState({
				title:detail[0].title,
				author:detail[0].author,
				datetime:detail[0].datetime,
				tag:detail[0].tag,
				content:detail[0].content
			});
			afterLoading();
		}catch (e) {
			console.log(e)
		}
	}
	componentWillMount() {
		this.getEssayDetail();
	}
}

export {Detail};
