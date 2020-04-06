/**
 * 常用工具
 **/

// str转dom
export const strToDom = (str) => {
	const p = document.createElement('p');
	p.innerHTML = str;
	return p;
};
