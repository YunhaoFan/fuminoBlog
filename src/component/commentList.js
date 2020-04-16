// 评论列表
import React, {Component} from 'react';
import {getComment} from "../api/api";
import {CommentBlock} from "./commentBlock";
import '../css/commentBlock.css';
import {Page} from "./pagable";

class CommentList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			presentPage: 1,
			commentList: [],
			totalPage: '',
			page: ''
		}
	}

	render() {
		return (
			<div>
				<hr className="divided-comment"/>
				<div className="comment-title">客官语录：</div>
				<div className="comment-block-list">
					{this.state.commentList}
				</div>
				<Page totalPage={this.state.totalPage} commentList={this} ref="page"/>
			</div>
		);
	}

	// 获取页数下的评论
	async getCommentByPage() {
		try {
			const data = await getComment({
				essayKey: JSON.parse(this.props.essayKey).id,
				presentPage: this.state.presentPage
			});
			const commentList = [];
			const commentStart = [];
			if (data.status == 0) {
				const commentBlock = (<CommentBlock key={-1} userId={"Fumino的管家"} content={"现在这里还空无一人~"}
													submitDateTime={"悠久的时空中"}/>);
				commentStart.push(commentBlock);
				this.setState({commentList: commentStart, totalPage: data.totalPage});
			} else {
				data.commentData.forEach((item) => {
					const commentBlock = (<CommentBlock key={item.id} userId={item.userId} content={item.content}
														submitDateTime={item.submitDateTime}/>);
					commentList.push(commentBlock);
				});
				this.setState({commentList: commentList, totalPage: data.totalPage});
			}
			console.log(this.state.totalPage);
			// const page = (<Page totalPage={this.state.totalPage} commentList={this}/>);
			// this.setState({page: page});
		} catch (e) {
			console.log(e)
		}
	}

	componentWillMount() {
		this.getCommentByPage();
	}
}

export {CommentList}
