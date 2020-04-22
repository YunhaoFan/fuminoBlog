// 单个评论模块
import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import '../css/commentBlock.css';
import {Reply} from "./reply";

class CommentBlock extends Component {
	constructor(props) {
		super(props);
		this.handleClickReply = this.handleClickReply.bind(this);
	}

	render() {
		return (
			<Fragment>
				<div className="comment-block">
					<span id="comment-userId">{this.props.userId}</span><span> 说：</span>
					<p id="comment-content">{this.props.content}</p>
					<span id="comment-datetime">{this.props.submitDateTime}</span>
					<span id="comment-reply" onClick={this.handleClickReply}>回复</span>
				</div>
				<div className="reply-container" ref="replyContainer">
				</div>
			</Fragment>
		)
	}

	// 单击回复 显示回复
	handleClickReply() {
		const replyContainer = this.refs.replyContainer;
		ReactDOM.render(<Reply key={this.props.commentId} essayKey={JSON.parse(localStorage.getItem('detailKey')).id}
							   commentId={this.props.commentId} commentBlock={this}/>, replyContainer);
		replyContainer.style.display = 'block';
		window.setTimeout(() => {
			replyContainer.style.opacity = 1
		}, 1);
	}

	// 单击取消 隐藏回复
	handleHiddenReply() {
		const replyContainer = this.refs.replyContainer;
		replyContainer.style.opacity = 0;
		window.setTimeout(() => {
			ReactDOM.unmountComponentAtNode(replyContainer);
			replyContainer.style.display = 'none'
		}, 500);
	}
}

export {CommentBlock}
