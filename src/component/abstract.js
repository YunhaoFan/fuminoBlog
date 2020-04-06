import React, {Component} from 'react';
import '../css/landing.css';
import {EssayGroup} from "./essayBlockGroup";
import {getAbstractByCategory} from "../api/api";
import {beforeLoading, afterLoading, adjustBanner} from "../js/loadingEvent";

class Abstract extends Component {
	constructor(props) {
		super(props);
		this.state = {
			essayArr: [],
		};
	}
	render() {
		return (
			<div className="landing-container">
				{this.state.essayArr}
			</div>
		)
	}
	async getAbstract() {
		try {
			beforeLoading();
			const type = window.location.hash.split('/')[1];;
			let data = await getAbstractByCategory({type:type});
			console.log('check:'+type);
			const essayArr = [];
			data.forEach((item) => {
				const arrItem = (
					<EssayGroup key={item.id} id={item.id} title={item.title} abstract={item.abstract} date={item.datetime}
					tag={item.tag} abstractImg={item.abstractImg}>
					</EssayGroup>);
				essayArr.push(arrItem);
			});
			console.log(essayArr);
			this.setState({essayArr: essayArr});
			afterLoading();
		} catch (e) {
			console.log(e);
		}

	}
	componentDidMount() {
		this.getAbstract();
		adjustBanner();
	}
}

export default (props) => {return (<Abstract {...props} key={props.location.pathname}/>)};
