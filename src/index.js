import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {bannerHoist} from "./js/scrollEvent";
import {routerConfig} from "./config/router";
import {Loading} from "./component/loadingAnime";


ReactDOM.render(<Loading/>,document.getElementById('loading-anime'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routerConfig, document.getElementById('router-view'));


bannerHoist();
registerServiceWorker();

