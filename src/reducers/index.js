import {
	combineReducers
} from 'redux'
import nav from './nav'
import userInfo from './userInfo'
import expreducer from './expreducer'
const reducer = combineReducers({
	nav,
	userInfo,
	expreducer
});

export default reducer;