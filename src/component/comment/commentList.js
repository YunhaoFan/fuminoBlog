// 评论列表
import React, {Component} from 'react';
import {CommentBlock} from "./commentBlock";
import '../../css/commentBlock.css';
import {Page} from "../functional/pagable";
import {getLocalStorageItem, getObjectVal, isEmptyObject} from "../../js/util";
import {getReply} from "../../api/api";

/**
 * props:
 * getCommentMethod:获取评论API
 * essayKey:文章key 默认为0(留言板)
 */

class CommentList extends Component {
	static defaultProps = {
		title: "客官语录"
	};

	constructor(props) {
		super(props);
		this.state = {
			presentPage: 1,
			commentList: [],
			totalPage: '',
			page: '',
			replyDict: []
		}
	}

	render() {
		return (
			<div>
				<hr className="divided-comment"/>
				<div className="comment-title">{this.props.title}</div>
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
			// 获取评论API
			const data = await this.props.getCommentMethod({
				essayKey: JSON.parse(this.props.essayKey).id,
				presentPage: this.state.presentPage
			});
			const commentList = [];
			const commentStart = [];
			const replyDict = this.state.replyDict;
			if (data.status == 0) {
				const commentBlock = (<CommentBlock key={-1} userId={"Fumino的管家"} content={"现在这里还空无一人~"}
													submitDateTime={"悠久的时空中"} commentId={-1}
													replyList={getObjectVal(replyDict, "-1")} commentList={this}/>);
				commentStart.push(commentBlock);
				this.setState({commentList: commentStart, totalPage: data.totalPage});
			} else {
				data.commentData.forEach((item) => {
					const commentBlock = (
						<CommentBlock key={item.id} commentId={item.id} userId={item.userId} content={item.content}
									  submitDateTime={item.submitDateTime}
									  replyList={getObjectVal(replyDict, String(item.id))} commentList={this}/>);
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

	// 获取回复
	async getCommentReply() {
		let essayKey;
		if (isEmptyObject(getLocalStorageItem('detailKey'))) {
			essayKey = 0
		} else {
			essayKey = getLocalStorageItem('detailKey').id;
		}
		try {
			const commentReplyList = await getReply({essayKey: essayKey});

			//创建comment和reply的映射
			const replyDict = {};
			commentReplyList.forEach(item => {
				if (Object.keys(replyDict).indexOf(String(item.commentId)) == -1) {
					replyDict[String(item.commentId)] = [];
					replyDict[String(item.commentId)].push(item)
				} else {
					replyDict[String(item.commentId)].push(item)
				}
			});

			this.setState({replyDict: replyDict});
			console.log(this.state.replyDict)
		} catch (e) {
			console.log(e)
		}
	}

	// 更新状态
	updateCommentList() {
		this.getCommentReply().then(() => {
			this.getCommentByPage();
		});
	}

	componentWillMount() {
		this.updateCommentList();
	}
}

export {CommentList}
