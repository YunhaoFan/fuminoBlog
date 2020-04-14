// 提示组件
import React, {Component} from 'react';
import '../css/notify.css';

class Notify extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notifyStyle: 'notify-message',
			notifyType: '提示信息'
		}
	}

	render() {
		return (
			<div className={this.getNotifyType(this.props.notifyType).notifyStyle}>
				<div className="notify-title">{
					this.getNotifyType(this.props.notifyType).notifyType
				}</div>
				<div className="notify-text">{this.props.notifyText} </div>
			</div>
		)
	}

	// 转换插入值
	getNotifyType(type) {
		let stateInfo = {};
		switch (type) {
			case 'message':
				stateInfo = {
					notifyType: '提示消息',
					notifyStyle: 'notify-message'
				};
				break;
			case 'error':
				stateInfo = {
					notifyType: '错误',
					notifyStyle: 'notify-error'
				};
				break;
			case 'warning':
				stateInfo = {
					notifyType: '警告',
					notifyStyle: 'notify-warning'
				};
				break;
			case 'success':
				stateInfo = {
					notifyType: '成功',
					notifyStyle: 'notify-success'
				}
		}
		return stateInfo;
	}
}

export {Notify};
