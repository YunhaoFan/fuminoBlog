// 回复组件
import React, {Component} from 'react';
import {submitReply} from "../api/api";
import {showNofify} from "../js/loadingEvent";
import '../css/reply.css';

/**
 * props:
 * 文章ID:essayKey
 * 回复Block的ID:commentId
 */
class Reply extends Component {
	constructor(props) {
		super(props);
		this.state = {
			replyContent: ''
		};
		this.handleCancelReply = this.handleCancelReply.bind(this);
		this.handleClickReply = this.handleClickReply.bind(this);
		this.handleReplyChange = this.handleReplyChange.bind(this);
	}

	render() {
		return (
			<div className={"reply-content-container reply-wrapper"}>
				<div>
					<label htmlFor={"replyInput"}>您的回复</label>
				</div>
				<div>
					<textarea id={"replyInput"} value={this.state.replyContent} onChange={this.handleReplyChange}/>
				</div>
				<div>
					<button id={"submitReply"} onClick={this.handleClickReply}>回复</button>
					<button id={"cancel"} onClick={this.handleCancelReply}>取消</button>
				</div>
			</div>
		)
	}

	// 监听输入变化
	handleReplyChange(val) {
		this.setState({
			replyContent: val.target.value
		})
	}

	// 单击提交回复
	async handleClickReply() {
		const data = {
			essayKey: this.props.essayKey,
			commentId: this.props.commentId,
			replyContent: this.state.replyContent
		};
		try {
			const res = await submitReply(data);
			if (res.errorCode !== 1000) {
				showNofify('error', '请求错误！');
			}
		} catch (e) {
			console.log(e)
		}
	}

	// 取消回复
	handleCancelReply() {
		this.props.commentBlock.handleHiddenReply();
	}
}

export {Reply};
