// 归档组件
import React, {Component, Fragment} from 'react';
import {getFiledEssay} from "../../api/api";
import {Redirect} from "react-router";
import "../../css/filed.css";
import {adjustBanner} from "../../js/loadingEvent";
import {scrollToAnchor} from "../../js/util";

class Filed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fileList: [],
			redirect: '',
			navList:[]
			//monthlyEssay:[]
		};
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return (
			<div className="file">
				<div className="file-nav">
					<span className="file-nav-title">时间轴</span>
					{this.state.navList}
				</div>
				<div className="file-content">
					{this.state.fileList}
					{this.state.redirect}
				</div>
			</div>
		)
	}

	// 查看详情
	async handleClick(val) {
		console.log(val);
		window.localStorage.setItem('detailKey', JSON.stringify(val));
		// 路由重定向
		const redirect = (<Redirect to='/detail'/>);
		this.setState({redirect: redirect});
	}

	// 获取归档文章综述
	async getFiledEssay() {
		try {
			const filedEssay = await getFiledEssay();
			const fileList = [];
			const navList =[];
			for (let year in filedEssay) {
				const monthlyEssay = [];
				navList.push(
					<div className="file-nav-year" key={"nav_"+year}
					onClick={(e)=>{scrollToAnchor(`${year}`)}}>{year}</div>
				);
				for (let month in filedEssay[year]) {
					const essayList = filedEssay[year][month];
					navList.push(
						<span className="file-nav-month" key={"nav_"+month}
							  onClick={(e)=>{scrollToAnchor(`${month}`)}}>{`${month} 月 (${essayList.length} 篇)`}</span>
					);
					monthlyEssay.push(
						<div id={month} key={month} className="file-month-container">
							<span className="file-month">{month+" "}</span><span>月</span>
						</div>
					);
					essayList.forEach(essay=>{
						monthlyEssay.push(
							<div className="file-block" onClick={()=>this.handleClick({id:essay.id})} key={essay.id}>
								<span className="file-title">{essay.title}</span>
								<span className="file-author">{essay.author}</span>
								<span className="file-datetime">{essay.datetime}</span>
							</div>
						);
					})
					//this.setState({monthlyEssay:monthlyEssay})
				}
				const essayInYear = (
					<div id={year} key={"essay_"+year} className="file-container">
						<div className="file-year-container">
							<span className="file-year">{year+"  "}</span><span>年</span>
						</div>
						<hr className="file-divided"/>
						{monthlyEssay}
					</div>);
				fileList.push(essayInYear);
			}
			this.setState({fileList: fileList,navList:navList})
		} catch (e) {
			console.log(e)
		}
	}

	componentDidMount() {
		this.getFiledEssay();
		adjustBanner();
	}
}

export {Filed}
