import React,{Component} from 'react';
import {getTags} from "../api/api";
import {Redirect} from "react-router";


class Tags extends Component{
	constructor(props){
		super(props);
		this.state = {
			tagsElemArr:[],
			redirect:''
		};
		this.handleClick =this.handleClick.bind(this);
	}
	render() {
		return (
			<div>
				{this.state.tagsElemArr}
			</div>

		);
	}
	async getAllTags (){
		try {
			const data = await getTags();
			const tags = data.tags;
			const tagsElemArr = [];
			console.log(tags);
			tags.forEach((item,index)=>{
				tagsElemArr.push(
					<span key={index} onClick={this.handleClick(item)}>{item}
					{this.state.redirect}
					</span>
				)
			});
			console.log(tagsElemArr);
			this.setState({tagsElemArr:tagsElemArr});
		}catch (e) {
			console.log(e)
		}
	}
	// 点击事件
	handleClick(val){
		//this.props.tagName = val;
		const redirect = (<Redirect to={'/tag/'+val}/>);
		this.setState({redirect:redirect});
	}
	componentWillMount() {
		this.getAllTags();
	}
}

export {Tags};
