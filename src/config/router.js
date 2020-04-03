import {Route} from 'react-router';
import {HashRouter, Switch} from "react-router-dom";
import React from 'react';
import {Landing} from "../component/landing";
import {Script} from "../component/studyScript";

// 路由配置
export const routerConfig = (
	<HashRouter>
		<div>
			<Switch>
				<Route exact path='/home' component={Landing}/>
				<Route exact path='/' component={Landing}/>
				<Route exact path='/script' component={Script}/>
			</Switch>
		</div>
	</HashRouter>
);
