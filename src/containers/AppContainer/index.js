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
import route from '../../routes/route'


import {
	Layout
} from 'antd';
const {
	Header,
	Content,
	Sider
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
			        <Sider><ComSider menu={this.props.nav}/><div className="copyright-text"> Ems ©2017 Created by chenym1992</div></Sider>
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