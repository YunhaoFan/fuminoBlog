import React, {Component} from 'react';
import '../css/landing.css';
import {EssayGroup} from "./essayBlockGroup";
import {getAbstractByCategory} from "../api/api";
import {beforeLoading,afterLoading} from "../js/loadingEvent";

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
			const type = window.location.hash.split('/')[1];
			console.log('check:'+type);
			const data = await getAbstractByCategory({type:type});
			const scriptAbstract = data;
			console.log(scriptAbstract);
			const essayArr = [];
			scriptAbstract.forEach((item) => {
				const arrItem = (
					<EssayGroup key={item.id} id={item.id} title={item.title} abstract={item.abstract} date={item.datetime}>
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

	componentWillMount() {
		this.getAbstract();
	}
}

export default (props) => {return (<Abstract {...props} key={props.location.pathname}/>)};
