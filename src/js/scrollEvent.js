/**
 * 滚动滑条过程中的事件
 */

//节流考虑

export const bannerHoist = () => {
	const banner = document.querySelector('.title-block');
	const header = document.querySelector('#header');
	document.addEventListener('scroll',function (e) {
		console.log(banner.offsetHeight,banner.offsetTop,window.scrollY,header.offsetHeight);
		if (window.scrollY > 0.5*header.offsetHeight - 0.5*banner.offsetHeight){
			if (!banner.classList.contains('hoist-banner')) {
				banner.classList.remove('title-block');
				banner.classList.add('hoist-banner');
			}
		}else {
			banner.classList.remove('hoist-banner');
			banner.classList.add('title-block');
		}
	})
};
