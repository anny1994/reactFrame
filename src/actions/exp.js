import {
	GET_STUDENT_ING_EXP
} from 'constants/ActionTypes'
import '../api/nav'
import axios from 'axios'
/*
 * action 创建函数
 */
/**
 * 获取老师正在进行的实验
 */
export function getStuIngExp() {
	return function(dispatch, getState) {
		axios.get('/xssyController.do?listjxz', {
			dataType: 'json'
		}).then(res => {
			let data = res.data.data
			dispatch(fetchStuIngExpList(data))
		})
	}
}
/**
 * 查询实验
 * @return {[type]} [description]
 */
export function searchExp(data) {
	console.log(data)
	return function(dispatch, getState) {
		axios.get('/xssyController.do?listjxz', {
			dataType: 'json',
			data: data
		}).then(res => {
			let data = res.data.data
			dispatch(fetchStuIngExpList(data))
		})
	}
}
export function fetchStuIngExpList(data) {
	return {
		type: GET_STUDENT_ING_EXP,
		data: data
	}
}