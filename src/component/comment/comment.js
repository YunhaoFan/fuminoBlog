// 评论模块
import React, {Component} from 'react';
import {showNofify} from "../../js/loadingEvent";
import {filterXSS} from "xss";
import '../../css/comment.css';
import  {debounce} from "../../js/util";

/**
 * props:
 * postMethod:提交表单API方法
 * essayId:文章对应key 默认为0(留言板)
 * commentList:对应commentList实体，用于提交后调用其中方法更新评论列表
 */

class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: '',
			nickname: '',
			email: '',
			remember: 0
		};
		this.commentChange = this.commentChange.bind(this);
		this.nicknameChange = this.nicknameChange.bind(this);
		this.emailChange = this.emailChange.bind(this);
	}

	render() {
		return (
			<form className="comment-form" id="comment-form"
				  onSubmit={(e) => {
					  debounce(this.checkForm(e),500);
				  }}>
				<hr/>
				<div>
					<div>
						<label htmlFor="comment-text">您想说点什么？</label>
					</div>
					<div>
						<textarea id="comment-text" name="comment" placeholder=" 随便说点你想说的吧(禁用HTML标签)~"
								  value={this.state.comment} onChange={this.commentChange}/>
					</div>
				</div>
				<div>
					<div>
						<label htmlFor="comment-nickname">如何称呼您？</label>
					</div>
					<div>
						<input id="comment-nickname" placeholder=" 必填昵称（不多于6个字符）"
							   value={this.state.nickname} onChange={this.nicknameChange}/>
					</div>
				</div>
				<div>
					<div>
						<label htmlFor="comment-email">您的邮箱是什么？</label>
					</div>
					<div>
						<input id="comment-email" placeholder=" 必填邮箱（不会外传的！）" value={this.state.email}
							   onChange={this.emailChange}/>
					</div>
				</div>
				<div>
					<div id="check-box-remember">
						<label htmlFor="comment-remember">记住个人信息？</label>
						<input id="comment-remember" ref="rememberMe" type="checkbox" defaultChecked={true}/>
					</div>
				</div>
				<div>
					<button type="submit">发表看法</button>
				</div>
			</form>
		);
	}

	// 动态监听输入事件
	commentChange(val) {
		this.setState({
			comment: val.target.value
		})
	}

	nicknameChange(val) {
		this.setState({
			nickname: val.target.value
		})
	}

	emailChange(val) {
		this.setState({
			email: val.target.value
		})
	}

	// 检查表单是否合法
	checkForm(e) {
		e.preventDefault();
		const nickNameLength = this.state.nickname.split('').length;
		const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
		//const htmlReg = /<[^>]+>/g;
		console.log(this.state)
		if (this.state.comment == '') {
			showNofify('error', '大佬写点东西吧:3');
			return false
		}
		if (this.state.nickname == '') {
			showNofify('error', '你得有个名字呀=w=');
			return false
		}
		if (nickNameLength > 6) {
			// 这里要封装一个提示窗塞进来
			showNofify('error', '名称需要小于等于6个字符=w=');
			return false
		}
		if (!emailReg.test(this.state.email)) {
			showNofify('error', '邮箱格式不正确！T_T');
			return false
		}
		// 做个过滤 防下XSS
		this.setState({
			comment: filterXSS(this.state.comment),
			nickname: filterXSS(this.state.nickname),
			email: filterXSS(this.state.email)
		});
		this.checkRemember();
		this.postComment();
		window.setTimeout(() => {
			const that = this.props.commentList;
			that.getCommentByPage.call(that);
			that.render.call(that);
			that.refs.page.updateStatus();
		}, 200);
	}

	// 提交表单
	async postComment() {
		const commentData = this.state;
		commentData.essayKey = JSON.parse(this.props.essayId).id;
		try {
			// postMethod为提交表单的api
			const res = await this.props.postCommentMethod(commentData);
			console.log(res)
			if (res.errorCode == 1000) {
				showNofify('success', '评论成功啦~！>w<');
			}
		} catch (e) {
			console.log(e)
		}

	}

	// 提交表单时的记住信息选项
	checkRemember() {
		if (this.refs.rememberMe.checked) {
			this.setState({remember: 1})
		}
		const commentInfo = JSON.stringify({
			comment: this.state.comment,
			nickname: this.state.nickname,
			email: this.state.email,
			essayKey: JSON.parse(this.props.essayId).id
		});
		localStorage.setItem('commentInfo', commentInfo);
	}

	// 获取记住信息选项
	getRememberInfo() {
		const commentInfo = JSON.parse(localStorage.getItem('commentInfo'));
		for (let i in commentInfo){
			if (i){
				this.setState({
					//comment: commentInfo.comment,
					nickname: commentInfo.nickname,
					email: commentInfo.email
					//essayKey: commentInfo.essayKey
				})
			}
		}
	}

	componentWillMount() {
		this.getRememberInfo();
		console.log(this)
	}
}

export {Comment};
