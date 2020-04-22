import React, {Component} from 'react';
import {Route} from 'react-router';
import {HashRouter, Switch,Redirect} from "react-router-dom";
import {Landing} from "../component/landing";
import Abstract from "../component/abstract";
import {Detail} from "../component/essayDetail";
import {Board} from "../component/board";
import {adjustBanner} from "../js/loadingEvent";

// 路由配置
class RouterConfig extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<HashRouter>
				<div>
					<Switch>
						<Route exact path='/home' component={Landing}/>
						<Route exact path='/abstract' component={Abstract}/>
						{/*<Route exact path='/music' component={Abstract}/>*/}
						{/*<Route exact path='/game' component={Abstract}/>*/}
						<Route exact path='/detail' component={Detail}/>
						<Route exact path='/board' component={Board}/>
						<Redirect path="/" to={{pathname: '/home'}} />
					</Switch>
				</div>
			</HashRouter>
		);
	}

	componentDidMount() {
		adjustBanner();
	}
}

export {RouterConfig};
