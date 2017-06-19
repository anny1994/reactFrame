import React from 'react'
import {
	connect
} from 'react-redux'

import {
	Layout,
	Breadcrumb
} from 'antd'
const {
	Header,
	Content,
	Footer,
	Sider
} = Layout

function mapStateToProps(state) {
	return {

	}
}

class Exp extends React.Component {

	render() {
		return (
			<Layout style={{minHeight:'100%'}}>
	          <Content style={{ margin: '0 16px' }}>
	            <Breadcrumb style={{ margin: '12px 0' }}>
	              <Breadcrumb.Item>实验列表</Breadcrumb.Item>
	            </Breadcrumb>
	            <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>
	              Bill is a cat.
	            </div>
	          </Content>
	        </Layout>

		)
	}
}

export default connect(
	mapStateToProps,
	// Implement map dispatch to props
)(Exp)