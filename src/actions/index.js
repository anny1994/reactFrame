import {
	GET_NAV_LIST
} from '../constants/ActionTypes'
import '../api/nav'
import axios from 'axios'
/*
 * action 创建函数
 */
export function initReq() {
	return function(dispatch, getState) {
		axios.get('/api/nav', {
			dataType: 'json'
		}).then(res => {
			let data = res.data.data
			dispatch(fetchNavList(data))
		})
	}
}

export function fetchNavList(data) {
	return {
		type: GET_NAV_LIST,
		data: data
	}
}