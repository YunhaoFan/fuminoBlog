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
	var offset = e.offsetTop;
	if (e.offsetParent != null) offset += getTop(e.offsetParent);
	return offset;
};

//获取元素的横坐标
export const getLeft = (e) => {
	var offset = e.offsetLeft;
	if (e.offsetParent != null) offset += getLeft(e.offsetParent);
	return offset;
};
