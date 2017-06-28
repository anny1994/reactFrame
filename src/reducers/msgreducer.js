import {
	GET_MSG_LIST
} from 'constants/ActionTypes'

const msg = (state = [], action) => {
	switch (action.type) {
		case GET_MSG_LIST:
			state = action.data
			return state
		default:
			return state
	}
}

export default msg