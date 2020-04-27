import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker, {unregister} from './registerServiceWorker';
import './index.css';
import {bannerHoist} from "./js/scrollEvent";
import {RouterConfig} from "./config/router";
import {Loading} from "./component/anime/loadingAnime";
import {initLayout} from "./js/loadingEvent";

unregister();
ReactDOM.render(<Loading/>,document.getElementById('loading-anime'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<RouterConfig/>, document.getElementById('router-view'));

initLayout(500);
bannerHoist();
registerServiceWorker();

