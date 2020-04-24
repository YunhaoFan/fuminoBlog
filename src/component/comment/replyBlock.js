// 回复显示区域

import React, {Component, Fragment} from 'react';
import '../../css/replyBlock.css';

/**
 * props:
 * replyId:唯一标识(key)
 * userId:用户昵称
 * replyContent:评论内容
 * datetime:评论时间
 */
class ReplyBlock extends Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Fragment>
				<div className="reply-block">
					<span className="reply-userId">{this.props.userId}</span><span> 回复：</span>
					<p className="reply-content">{this.props.replyContent}</p>
					<span className="reply-datetime">{this.props.datetime}</span>
				</div>
			</Fragment>
		)
	}
}

export {ReplyBlock};
