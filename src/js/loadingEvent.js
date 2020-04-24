/**
 * 加载事件动画
 **/
import {Notify} from "../component/functional/notify";
import ReactDOM from 'react-dom';
import React from 'react';

export const beforeLoading = () => {
	const loadingDiv = document.getElementById('loading-anime');
	loadingDiv.style.display = 'block';
	// 利用事件循环
	window.setTimeout(() => {
		loadingDiv.style.opacity = '1';
		loadingDiv.style.zIndex = '6';
	}, .1);
};

export const afterLoading = () => {
	const loadingDiv = document.getElementById('loading-anime');
	loadingDiv.style.opacity = '0';
	window.setTimeout(() => {
		loadingDiv.style.zIndex = '-1';
		loadingDiv.style.display = 'none';
	}, 900);
};

// 初始化球形 添加旋转动画（这里改用div了，li有“·”这个东西）
export const initLayout = (perspective) => {
	let liArr = document.querySelectorAll('#sphere div');
	//console.log(liArr);
	window.setTimeout(() => {
		for (let i = 0; i < liArr.length; i++) {
			let liDegY = parseInt(i / 12) * 22.5;
			let liDegX = 30 * i;
			liArr[i].style =
				`transform:rotateY(${liDegY}deg) rotateX(${liDegX}deg)
					translateZ(${Math.abs(perspective)}px)`;
		}
	}, 1);
};

// banner位置更改
export const adjustBanner = () => {
	const path = window.location.hash.split('/')[1];
	//console.log(path)
	const header = document.getElementById('header');
	if (path !== 'home') {
		header.classList.remove('App-header-home');
		header.classList.add('App-header');
	} else {
		header.classList.remove('App-header');
		header.classList.add('App-header-home');
	}
};

// 显示notify
export const showNofify = (type, text) => {
	const notify = (<Notify notifyType={type} notifyText={text}/>);
	const notifyContainer = document.createElement('div');
	document.getElementById('notify').appendChild(notifyContainer);
	ReactDOM.render(notify, notifyContainer);
	window.setTimeout(() => {
		notifyContainer.childNodes[0].style.opacity = 1;
	}, 500);
	window.setTimeout(() => {
		notifyContainer.childNodes[0].style.opacity = 0;
	}, 5000);
	window.setTimeout(() => {
		ReactDOM.unmountComponentAtNode(notifyContainer);
		notifyContainer.parentNode.removeChild(notifyContainer);
	}, 6000);
};
