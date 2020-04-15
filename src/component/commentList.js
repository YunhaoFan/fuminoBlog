// 评论列表
import React, {Component} from 'react';
import {getComment} from "../api/api";
import {CommentBlock} from "./commentBlock";
import '../css/commentBlock.css';

class CommentList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			presentPage: 1,
			commentList:[]
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
			</div>
		);
	}

	// 获取页数赌赢
	async getCommentByPage() {
		try {
			const data = await getComment({
				essayKey: JSON.parse(this.props.essayKey).id,
				presentPage: this.state.presentPage
			});
			const commentList = [];
			const commentStart = [];
			if (data.status==0){
				const commentBlock = (<CommentBlock key={-1} userId={"Fumino的管家"} content={"现在这里还空无一人~"}
													submitDateTime={"悠久的时空中"}/>);
				commentStart.push(commentBlock);
				this.setState({commentList:commentStart});
			} else {
				data.commentData.forEach((item) => {
					const commentBlock = (<CommentBlock key={item.id} userId={item.userId} content={item.content}
														submitDateTime={item.submitDateTime}/>);
					commentList.push(commentBlock);
				});
				this.setState({commentList:commentList});
			}
		} catch (e) {
			console.log(e)
		}
	}

	componentWillMount() {
			this.getCommentByPage();
	}
}

export {CommentList}
