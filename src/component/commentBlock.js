// 单个评论模块
import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import '../css/commentBlock.css';
import {Reply} from "./reply";
import {ReplyBlock} from "./replyBlock";

/**
 * props:
 * userId
 * content
 * submitDateTime
 * replyList:相应的回复列表
 * replyId(key)
 */
class CommentBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reply: []
		};
		this.handleClickReply = this.handleClickReply.bind(this);
	}

	render() {
		return (
			<Fragment>
				<div className="comment-block">
					<span className="comment-userId">{this.props.userId}</span><span> 说：</span>
					<p className="comment-content">{this.props.content}</p>
					<span className="comment-datetime">{this.props.submitDateTime}</span>
					<span className="comment-reply" onClick={this.handleClickReply}>回复</span>
				</div>
				<div className="reply-container" ref="replyContainer">
				</div>
				<div className="reply-list-container" ref="replyListContainer">
					{this.state.reply}
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

	// 显示回复列表
	initReplyList(props) {
		const replyList = props.replyList;
		const reply = [];
		replyList.forEach(item => {
			reply.push(<ReplyBlock userId={item.userId} replyContent={item.content}
								   datetime={item.datetime} key={item.id}/>)
		});
		this.setState({reply: reply});
		console.log(reply, this.state.reply)
	}

	// 更新回复列表
	componentWillReceiveProps(nextProps, nextContext) {
			this.initReplyList(nextProps)
	}

	componentDidMount() {
			this.initReplyList(this.props);
	}
}

export {CommentBlock}
