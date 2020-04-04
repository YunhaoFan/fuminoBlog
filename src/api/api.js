/**
 api定义
 **/

import fetch from '../config/fetch'

// 获取学习笔记综述
export const getStudyScriptAbstract = () => fetch('/scriptAbstract');

// 获取音乐综述
export const getMusicAbstract = () => fetch('/musicAbstract');

// 获取游戏综述
export const getGameAbstract = () =>fetch('/gameAbstract');

// 获取文章详情
export const getDetail = (data) => fetch('/essayDetail',data,'POST');
