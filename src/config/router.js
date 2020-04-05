import {Route} from 'react-router';
import {HashRouter, Switch} from "react-router-dom";
import React from 'react';
import {Landing} from "../component/landing";
import Abstract from "../component/abstract";
import {Detail} from "../component/essayDetail";

// 路由配置
export const routerConfig = (
	<HashRouter>
		<div>
			<Switch>
				<Route exact path='/home' component={Landing}/>
				<Route exact path='/' component={Landing}/>
				<Route exact path='/script' component={Abstract}/>
				<Route exact path='/music' component={Abstract}/>
				<Route exact path='/game' component={Abstract}/>
				<Route exact path='/detail' component={Detail}/>
			</Switch>
		</div>
	</HashRouter>
);
