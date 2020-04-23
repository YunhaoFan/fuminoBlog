/**
 * 常用工具
 **/

// str转dom
export const strToDom = (str) => {
	const p = document.createElement('p');
	p.innerHTML = str;
	return p;
};

//获取元素的纵坐标
export const getTop = (e) => {
	let offset = e.offsetTop;
	if (e.offsetParent != null) offset += getTop(e.offsetParent);
	return offset;
};

//获取元素的横坐标
export const getLeft = (e) => {
	let offset = e.offsetLeft;
	if (e.offsetParent != null) offset += getLeft(e.offsetParent);
	return offset;
};

// 实现一下insertAfter
export const insertAfter = (newElement, targetElement) => {
	const parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling)
	}
};

// 节流
export const throttle = (fn, interval) => {
	//上一次执行时间
	let lastTime = Date.now();
	return function () {
		let context = this;
		let args = arguments;
		//当前时间
		let now = Date.now();
		//console.log(now);
		//将当前时间和上次执行函数时间对比，差值大于interval就执行函数
		if (now - lastTime > interval) {
			lastTime = Date.now();
			fn.apply(context, args)
		}
	}
};

// 防抖
export const debounce = (fn, wait) => {
	// 定时器
	let timeout = null;
	return function () {
		const that = this;
		fn = fn.bind(that,...arguments);
		if (timeout !== null) clearTimeout(timeout);
		timeout = window.setTimeout(fn, wait);
	}
};

// 生成自然数
export const naturalArr = length => Array.from({length}).map((v, k) => k);

// 图片懒加载
export const lazyLoadImg = () => {
	const imgSet = document.querySelectorAll('img');
	const imgAction = (item) => {
		if (item.src !== item.getAttribute('data-src')){
			const img = new Image();
			img.src = item.getAttribute('data-src');
			img.onload = () => {
				item.style.opacity = 0;
				window.setTimeout(() => {
					item.src = item.getAttribute('data-src');
					item.style.opacity = 0.5;
				}, 500)
			}
		}
	};
	imgSet.forEach(item => {
		//console.log(getTop(item) - window.innerHeight)
		if (getTop(item) - window.innerHeight- window.scrollY < 0) {
			imgAction(item);
		} else {
			document.addEventListener('scroll', (e) => {
				//console.log(getTop(item)-window.innerHeight-window.scrollY)
				if (getTop(item) - window.scrollY - window.innerHeight < 0) {
					imgAction(item);
				}
			})
		}

	})
};

// 判断是否为空对象(JSON.stringify和object.keys.length方法)
export const isEmptyObject = (obj)=>{
	if (JSON.stringify(obj) == '{}'){
		console.log(obj,JSON.stringify(obj) == '{}');
		return true;
	} else {
		return false;
	}
};

// setItem到localStorage
export const setLocalStorageItem = (key,val)=>{
	window.localStorage.setItem(key,JSON.stringify(val))
};

// 从localStorage getItem
export const getLocalStorageItem = (key) =>{
	if (JSON.parse(window.localStorage.getItem(key))==null){
		return {}
	}
	return JSON.parse(window.localStorage.getItem(key));
};

// setItem到sessionStorage
export const setSessionStorageItem = (key,val) =>{
	window.sessionStorage.setItem(key,JSON.stringify(val))
};

// 从sessionStorage getItem
export const getSessionStorageItem = (key) =>{
	if (JSON.parse(window.sessionStorage.getItem(key))==null){
		return {}
	}
	return JSON.parse(window.sessionStorage.getItem(key));
};

// 获取对象值，加入判断有无该键
export const getObjectVal = (obj,key) =>{
	console.log(obj,key)
	if(obj.hasOwnProperty(key)){
		return obj[key]
	}else {
		return []
	}
};
