import React from 'react'
import {
	connect
} from 'react-redux'
import {
	bindActionCreators
} from 'redux'
import {
	BrowserRouter as Router
} from 'react-router-dom'
import ComSider from '../../components/Sider'
import './index.less'
import * as navActionsCreators from '../../actions'
import {
	Layout
} from 'antd';

import route from '../../routes/route'
const {
	Header,
	Sider,
	Content
} = Layout;
const mapStateToProps = state => {
	let {
		nav
	} = state
	return {
		nav: nav
	}
}


export class AppContainer extends React.Component {

	constructor(props) {
		super(props)
		this.navActionsCreators = bindActionCreators(navActionsCreators, this.props.dispatch)
	}
	componentWillMount() {
		this.navActionsCreators.initReq()
	}

	render() {
		return (
			<Router>
			<div className="app-ct">
				<Layout style={{'height':'100%'}}>
			      <Header style={{'color':'#fff'}}>实验室信息管理系统</Header>
			      <Layout >
			        <Sider><ComSider menu={this.props.nav}/></Sider>
			        <Content>
						{route}
			        </Content>
			      </Layout>
			    </Layout>
			</div>
			</Router>
		)
	}
}
export default connect(
	mapStateToProps,
)(AppContainer)