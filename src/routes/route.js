import React from 'react'
import {
	Switch,
	Redirect,
	Route
} from 'react-router-dom'
import WelCome from 'components/WelCome'
import Exp from 'containers/ExpContainer'
import YwcExp from 'containers/ExpContainer/YwcExp'

import StuIngExp from 'containers/ExpContainer/stuIngExp'
import TeaFqExp from 'containers/ExpContainer/teaFqExp'

import MsgList from 'containers/MsgContainer'
/*import NotFound from '../components/NotFound'*/
const routes = (
	<Switch>
		<Route exact path="/" component={WelCome}/>
		<Route path='/start_exp_list' component={TeaFqExp}/>
		{/*学生进行中的实验*/}
    	<Route path='/stujxz_exp' component={Exp}/>
    	<Route path='/stuywc_exp' component={YwcExp}/>
    	<Route path='/tjsyzb/:syid' component={StuIngExp}/>
    	<Route path='/tjsyjl/:syid' component={StuIngExp}/>
    	{/*消息*/}
		<Route path='/mymsg_list' component={MsgList}/>
    	
		<Redirect to="/"/>
		{/*未设置重定向可以设置404*/}
		{/*<Route component={NotFound}/>*/}
    </Switch>
)

export default routes