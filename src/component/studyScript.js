import React, {Component} from 'react';
import '../css/landing.css';
import {EssayGroup} from "./essayBlockGroup";
import {getStudyScriptAbstract} from "../api/api";
import {beforeLoading,afterLoading} from "../js/loadingEvent";

class Script extends Component {
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
	async getStudyScriptData() {
		try {
			beforeLoading();
			const data = await getStudyScriptAbstract('/script');
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
		this.getStudyScriptData();
	}
}

export {Script};
