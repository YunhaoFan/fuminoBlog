import React, {Component} from 'react';
import {CommentList} from "./commentList";
import {Comment} from "./comment";
import {getComment, submitComment} from "../api/api";
import {adjustBanner} from "../js/loadingEvent";


class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boardCommentList:''
		}
	}

	render() {
		return (
			<div className="detail-container">
				<div className="essay-content">
					<CommentList essayKey={JSON.stringify({id: 0})} getCommentMethod={getComment} title={"客官们的建议"}
								 ref="boardCommentList"/>
					<Comment essayId={JSON.stringify({id: 0})} commentList={this.state.boardCommentList}
							 postCommentMethod={submitComment}/>
				</div>
			</div>
		);
	}

	getBoardCommentList(){
		return this.refs.boardCommentList
	}

	componentDidMount() {
		console.log(this.refs.boardCommentList);
		console.log(this);
		this.setState({boardCommentList:this.getBoardCommentList()});
		adjustBanner();
	}
}

export {Board};
