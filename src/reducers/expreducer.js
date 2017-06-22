/**
 * 实验相关reducer
 * @author chenym1992
 * @time 2017-06-20 16:48:07
 */
import {
	combineReducers
} from 'redux'
import {
	GET_STUDENT_ING_EXP,
	GET_EXP_DETAIL_BY_ID
} from 'constants/ActionTypes'
// 实验列表
const expList = (state = [], action) => {
	switch (action.type) {
		case GET_STUDENT_ING_EXP:
			state = action.data
			return state
		default:
			return state
	}
}

// 实验详情
const expDetail = (state = {}, action) => {
	switch (action.type) {
		case GET_EXP_DETAIL_BY_ID:
			state = action.data
			return {
				...state
			}
		default:
			return state
	}
}
const expreducer = combineReducers({
	expList,
	expDetail
});
export default expreducer