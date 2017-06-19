import React from 'react'
import {
	Switch,
	Redirect,
	Route
} from 'react-router-dom'
import WelCome from '../containers/WelComeContainer'
import Exp from '../containers/ExpContainer'
/*import NotFound from '../components/NotFound'*/
const routes = (
	<Switch>
		<Route exact path="/" component={WelCome}/>
    	<Route path='/stujxz_exp' component={Exp}/>
		<Redirect to="/"/>
		{/*未设置重定向可以设置404*/}
		{/*<Route component={NotFound}/>*/}
    </Switch>
)

export default routes