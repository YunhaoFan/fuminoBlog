import React, {Component} from 'react';
import {HashRouter, Link} from "react-router-dom";
import './App.css';
import {Sphere} from "./component/3dGallery";
import {adjustBanner} from "./js/loadingEvent";

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="App">
				<div id="header" className="App-header-home ">
					<Sphere> </Sphere>
					<div className="title-block ease-in-out">
						<div className="blog-title">Fumino's Blog.</div>
						<div className="blog-subtitle">欢迎来到文乃的小空间，一只有艺术梦想的工科狗。不定期记录学习笔记、音乐、游戏相关内容。</div>
						<div className={"navList"}>
							<HashRouter>
								<span><Link to={'/home'}>首页</Link></span>
								<span><Link to={'/abstract'}>日志</Link></span>
								<span><Link to={'/board'}>留言板</Link></span>
							</HashRouter>
						</div>
					</div>
				</div>
			</div>
		);
	};

	componentDidMount() {
		adjustBanner();
	}
}

export default App;
