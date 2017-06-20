import {
	combineReducers
} from 'redux'
import nav from './nav'
import userInfo from './userInfo'
import exp from './exp'
const reducer = combineReducers({
	nav,
	userInfo,
	exp
});

export default reducer;