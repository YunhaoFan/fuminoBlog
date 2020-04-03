import React, { Component } from 'react';
import '../css/landing.css';
import {EssayGroup} from "./essayBlockGroup";

class Script extends Component{
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="landing-container">
				<EssayGroup title={"测试标题1"} abstract={"测试综述1"} date={"2020/4/4"}> </EssayGroup>
				<EssayGroup title={"测试标题1"} abstract={"测试综述1"} date={"2020/4/4"}> </EssayGroup>
				<EssayGroup title={"测试标题1"} abstract={"测试综述1"} date={"2020/4/4"}> </EssayGroup>
				<EssayGroup title={"测试标题1"} abstract={"测试综述1"} date={"2020/4/4"}> </EssayGroup>
				<EssayGroup title={"测试标题1"} abstract={"测试综述1"} date={"2020/4/4"}> </EssayGroup>
				<EssayGroup title={"测试标题1"} abstract={"测试综述1"} date={"2020/4/4"}> </EssayGroup>
				<EssayGroup title={"测试标题1"} abstract={"测试综述1"} date={"2020/4/4"}> </EssayGroup>
			</div>
		)
	}
}

export {Script};
