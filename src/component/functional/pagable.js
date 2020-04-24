// 分页组件
import React, {Component, Fragment} from 'react';
import {showNofify} from "../../js/loadingEvent";
import '../../css/pagable.css';
import {naturalArr} from "../../js/util";

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageNumArr: [],
			presentPage: 1,
			maxDisNum: 5,
			prevPage: 'prev-disable',
			nextPage: 'next-enable'
		}
	}

	render() {
		return (
			<Fragment>
				<div className="page-container">
					<span className={this.state.prevPage} onClick={() => this.prevPage()}>上一页</span>
					{this.state.pageNumArr}
					<span className={this.state.nextPage} onClick={() => this.nextPage()}>下一页</span>
				</div>
				<span className="page-now">现在客官您在第 {this.state.presentPage} 页/w\ </span>
			</Fragment>
		)
	}

	// 初始化页码组
	initPageNum(totalPage) {
		const pageNumArr = [];
		if (totalPage > this.state.maxDisNum) {
			const pageArr = naturalArr(this.state.maxDisNum);
			console.log(pageArr);
			pageArr.forEach(item => {
				const li = (<span className="page-num" key={item + 1} onClick={() => {
					this.setState({presentPage: item + 1});
					window.setTimeout(() => this.handleClickPageNum(), 1);
				}}>{item + 1}</span>);
				pageNumArr.push(li);
			});
			pageArr.push(<span>...</span>
			)
			;
			this.setState({
				pageNumArr: pageNumArr
			});
		} else {
			const pageArr = naturalArr(totalPage);
			pageArr.forEach(item => {
				const li = (<span className="page-num" key={item + 1} onClick={() => {
					this.setState({presentPage: item + 1});
					window.setTimeout(() => this.handleClickPageNum(), 1);
				}}>{item + 1}</span>);
				pageNumArr.push(li);
			});
			this.setState({
				pageNumArr: pageNumArr
			});
		}
		//this.updateStatus();
	}

	// 判断并更新当前状态
	updateStatus() {
		const presentPage = this.state.presentPage;
		const totalPage = this.props.totalPage;
		console.log(presentPage, totalPage);
		const border = parseInt(this.state.maxDisNum / 2) + 1;
		this.setState({presentPage: presentPage});
		if (presentPage > border && presentPage < totalPage - border) {
			const pageNumArrMiddle = [];
			pageNumArrMiddle.push(<span>...</span>);
			for (let i = presentPage - border + 1; i < presentPage + border; i++) {
				pageNumArrMiddle.push(<span className="page-num" key={i} onClick={() => {
					this.setState({presentPage: i});
					window.setTimeout(() => this.handleClickPageNum(), 1);
				}}>{i}</span>)
			}
			pageNumArrMiddle.push(<span>...</span>);
			this.setState({
				pageNumArr: pageNumArrMiddle
			});
		}
		if (presentPage >= totalPage - border && totalPage - this.state.maxDisNum > 0) {
			const pageNumArrEnd = [];
			pageNumArrEnd.push(<span>...</span>);
			for (let i = totalPage - this.state.maxDisNum + 1; i < totalPage + 1; i++) {
				pageNumArrEnd.push(<span className="page-num" key={i} onClick={() => {
					this.setState({presentPage: i});
					window.setTimeout(() => this.handleClickPageNum(), 1);
				}}>{i}</span>)
			}
			this.setState({
				pageNumArr: pageNumArrEnd
			});
		}
		if (presentPage <= border && totalPage - this.state.maxDisNum > 0) {
			const pageNumArrEnd = [];
			for (let i = 1; i < this.state.maxDisNum + 1; i++) {
				pageNumArrEnd.push(<span className="page-num" key={i} onClick={() => {
					this.setState({presentPage: i});
					window.setTimeout(() => this.handleClickPageNum(), 1);
				}}>{i}</span>)
			}
			pageNumArrEnd.push(<span>...</span>);
			this.setState({
				pageNumArr: pageNumArrEnd
			});
		}
		if (presentPage > 1 && presentPage < totalPage) {
			this.setState({
				prevPage: 'prev-enable',
				nextPage: 'next-enable'
			});
		}
		if (presentPage==1&&totalPage==1){
			this.setState({
				prevPage: 'prev-disable',
				nextPage: 'next-disable'
			});
		}else if (presentPage == 1) {
			this.setState({
				prevPage: 'prev-disable',
				nextPage: 'next-enable'
			});
		}
		else if (presentPage == totalPage) {
			this.setState({
				prevPage: 'prev-enable',
				nextPage: 'next-disable'
			});
		}
	}

	// 上一页动作
	prevPage() {
		const currentPage = this.state.presentPage;
		console.log('current:', currentPage);
		if (currentPage !== 1) {
			this.setState({presentPage: currentPage - 1});
			window.setTimeout(() => {
				this.handleClickPageNum()
			}, 1);
		} else {
			showNofify('message', '前面已经没辣！')
		}
	}

	// 下一页动作
	nextPage() {
		const currentPage = this.state.presentPage;
		console.log('current:', currentPage);
		if (currentPage !== this.props.totalPage) {
			this.setState({presentPage: currentPage + 1});
			window.setTimeout(() => {
				this.handleClickPageNum()
			}, 1);
		} else {
			showNofify('message', '已经翻到底辣！')
		}
	}

	// 将数据传给commentList
	sendDataToCommentList() {
		// 将presentPage传递到父组件
		const commentList = this.props.commentList;
		commentList.setState({presentPage: this.state.presentPage});
		console.log('commentListState:', commentList.state);
		commentList.getCommentByPage();
	}

	// 点击事件
	handleClickPageNum() {
		this.updateStatus();
		this.sendDataToCommentList();
	}

	// 即将接收到页数时更新当前状态
	componentWillReceiveProps(nextProps, nextContext) {
		// 初始化页码状态
		this.initPageNum(nextProps.totalPage);
		// 更新状态
		window.setTimeout(()=>this.updateStatus(),1);
	}
}

export {
	Page
};
