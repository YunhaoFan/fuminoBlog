/**
 api定义
 **/

import fetch from '../config/fetch'

// 获取学习笔记综述
export const getAbstractByCategory = (data) => fetch('/abstractByCategory',data,'POST');

// 获取文章详情
export const getDetail = (data) => fetch('/essayDetail',data,'POST');
