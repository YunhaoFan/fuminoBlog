/**
 api定义
 **/

import fetch from '../config/fetch'

// 通过分类获取综述
export const getAbstractByCategory = (data) => fetch('/abstractByCategory',data,'POST');

// 获取文章详情
export const getDetail = (data) => fetch('/essayDetail',data,'POST');

// 获取tags
export const getTags = () => fetch('/tags');

// 通过tags获取综述
export const getAbstractByTagName = (data) =>fetch('/abstractByTagName',data,'POST');
