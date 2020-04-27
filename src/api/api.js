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

// 提交评论
export const submitComment = (data) =>fetch('/submitComment',data,'POST');

// 获取文章评论
export const getComment = (data) =>fetch('/getComment',data,'POST');

// 获取回复
export const getReply = (data) =>fetch('/commentReplyByEssayId',data,'GET');

// 提交回复
export const submitReply = (data) =>fetch('/submitReply',data,'POST');

// 获取归档
export const getFiledEssay = () => fetch('/filed');
