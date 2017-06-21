/**
 * 实验相关reducer
 * @author chenym1992
 * @time 2017-06-20 16:48:07
 */

import {
	GET_STUDENT_ING_EXP
} from 'constants/ActionTypes'

const exp = (state = [], action) => {
	switch (action.type) {
		case GET_STUDENT_ING_EXP:
			state = action.data
			return state
		default:
			return state
	}
}

export default exp