/**
 * 加载事件动画
 **/

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
