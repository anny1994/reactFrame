import {
	GET_MSG_LIST
}
from 'constants/ActionTypes'
import '../api/news'
import axios from 'axios'
/*
 * action 创建函数
 */
/**
 * 获取老师正在进行的实验
 */
export function getMsgList(url) {
	return function(dispatch, getState) {
		axios.get(url, {
			dataType: 'json'
		}).then(res => {
			let data = res.data.data
			dispatch(fetchMsgList(data))
		})
	}
}
export function fetchMsgList(data) {
	return {
		type: GET_MSG_LIST,
		data: data
	}
}