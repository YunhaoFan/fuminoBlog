/**
 * 滚动滑条过程中的事件
 */

// 节流
const throttle = (fn,interval) => {
	//上一次执行时间
	let lastTime = Date.now();
	return function () {
		let context =this;
		let args = arguments;
		//当前时间
		let now = Date.now();
		console.log(now);
		//将当前时间和上次执行函数时间对比，差值大于interval就执行函数
		if (now-lastTime > interval){
			lastTime = Date.now();
			fn.apply(context,args)
		}
	}
};
// banner位置提升
export const bannerHoist = () => {
	const banner = document.querySelector('.title-block');
	const header = document.querySelector('#header');
	document.addEventListener('scroll', throttle(function (e) {
		console.log(banner.offsetHeight, banner.offsetTop, window.scrollY, header.offsetHeight);
		if (window.scrollY > 0.5 * header.offsetHeight - 0.5 * banner.offsetHeight) {
			if (!banner.classList.contains('hoist-banner')) {
				banner.classList.remove('title-block');
				banner.classList.add('hoist-banner');
			}
		} else {
			banner.classList.remove('hoist-banner');
			banner.classList.add('title-block');
		}
	},100))
};
