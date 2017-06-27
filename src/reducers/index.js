import {
	combineReducers
} from 'redux'
import nav from './nav'
import userInfo from './userInfo'
import expreducer from './expreducer'
import msg from './msgreducer'
const reducer = combineReducers({
	nav,
	userInfo,
	expreducer,
	msg
});

export default reducer;