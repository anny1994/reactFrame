import React from 'react'
import {
	Switch,
	Redirect,
	Route
} from 'react-router-dom'
import WelCome from 'components/WelCome'
import Exp from 'containers/ExpContainer'


import StuIngExp from 'containers/ExpContainer/stuIngExp'
/*import NotFound from '../components/NotFound'*/
const routes = (
	<Switch>
		<Route exact path="/" component={WelCome}/>
		{/*学生进行中的实验*/}
    	<Route path='/stujxz_exp' component={Exp}/>

    	<Route path='/tjsyzb/:syid' component={StuIngExp}/>
    	<Route path='/tjsyjl/:syid' component={StuIngExp}/>
		<Redirect to="/"/>
		{/*未设置重定向可以设置404*/}
		{/*<Route component={NotFound}/>*/}
    </Switch>
)

export default routes