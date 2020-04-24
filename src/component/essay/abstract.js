import React, {Component} from 'react';
import '../../css/landing.css';
import {EssayGroup} from "./essayBlockGroup";
import {getAbstractByCategory, getAbstractByTagName} from "../../api/api";
import {adjustBanner} from "../../js/loadingEvent";
import {Tags} from "../functional/tags";
import {lazyLoadImg} from "../../js/util";

class Abstract extends Component {
	constructor(props) {
		super(props);
		this.state = {
			essayArr: [],
			tag: ''
		};
	}

	render() {
		return (
			<div>
				<Tags abstract={this}/>
				<div className="landing-container">
					<div className="abstract-container">
						{this.state.essayArr}
					</div>
				</div>
			</div>
		)
	}

	// 根据tag值 按照tag分类获取概览组
	async getAbstractByTag(tag) {
		try {
			//beforeLoading();
			let data = await getAbstractByTagName({tagName: tag});
			const essayArr = [];
			data.forEach((item) => {
				const arrItem = (
					<EssayGroup key={item.id} id={item.id} title={item.title} abstract={item.abstract}
								date={item.datetime}
								tag={item.tag} abstractImg={item.abstractImg}>
					</EssayGroup>);
				essayArr.push(arrItem);
			});
			console.log(essayArr);
			this.setState({essayArr: essayArr});
			//afterLoading();
		} catch (e) {
			console.log(e);
		}
	}

	// 根据点击类别 按照类别分类获取概览组
	async getAbstract(type) {
		try {
			//beforeLoading();
			let data = await getAbstractByCategory({type: type});
			console.log('check:' + type);
			const essayArr = [];
			data.forEach((item) => {
				const arrItem = (
					<EssayGroup key={item.id} id={item.id} title={item.title} abstract={item.abstract}
								date={item.datetime}
								tag={item.tag} abstractImg={item.abstractImg}>
					</EssayGroup>);
				essayArr.push(arrItem);
			});
			console.log(essayArr);
			this.setState({essayArr: essayArr});
			//afterLoading();
		} catch (e) {
			console.log(e);
		}

	}

	componentDidMount() {
		this.getAbstractByTag('All');
		adjustBanner();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		window.setTimeout(lazyLoadImg,1000);
	}
}

export default (props) => {
	return (<Abstract {...props} key={props.location.pathname}/>)
};
