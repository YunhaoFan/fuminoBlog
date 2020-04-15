// 单个评论模块
import React,{Component} from 'react';
import '../css/commentBlock.css';

class CommentBlock extends Component{
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="comment-block">
				<span id="comment-userId">{this.props.userId}</span><span> 说：</span>
				<p id="comment-content">{this.props.content}</p>
				<span id="comment-datetime">{this.props.submitDateTime}</span>
			</div>
		)
	}
}

export {CommentBlock}
