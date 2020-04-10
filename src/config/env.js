/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl;
let baseImgPath;
baseUrl = 'http://localhost:80';
baseImgPath = 'http://localhost:80/img';
//baseUrl = 'http://'+window.location.host+'';
//baseImgPath = 'http://'+window.location.host+'img/';

export {
	baseUrl,
	baseImgPath
}
