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
