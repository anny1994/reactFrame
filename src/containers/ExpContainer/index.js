import React from 'react'
import {
	connect
} from 'react-redux'
import {
	bindActionCreators
} from 'redux'
import * as expActionsCreators from '../../actions/exp'
import {
	paginationConfig
} from '../../constants/constant'
import {
	Layout,
	Breadcrumb,
	Table,
	Icon,
	Menu,
	Dropdown,
	Button
} from 'antd'
const {
	Content
} = Layout

function mapStateToProps(state) {
	let {
		exp
	} = state
	return {
		list: exp.list,
		total: exp.totalRecords
	}
}
const menu = (
	<Menu>
    <Menu.Item>
      	<Button type="primary">启动实验</Button>
    </Menu.Item>
    <Menu.Item>
    	<Button >编辑实验</Button>

    </Menu.Item>
    <Menu.Item>
      	<Button type="danger">删除实验</Button>
    </Menu.Item>
  </Menu>
)
const columns = [{
	title: '实验编号',
	dataIndex: 'sybh',
	key: 'sybh'
}, {
	title: '实验名称',
	dataIndex: 'name',
	key: 'name',
}, {
	title: '实验日期',
	dataIndex: 'syrq',
	key: 'syrq',
}, {
	title: '发起人',
	dataIndex: 'lsname',
	key: 'lsname',
}, {
	title: '状态',
	dataIndex: 'xszt',
	key: 'xszt',
	render: text => {
		if (text === 3) {
			return '实验进行中'
		}
		if (text === 2) {
			return '实验准备中'
		}
	},
}, {
	title: '操作',
	key: 'action',
	render: (text, record) => (
		<Dropdown overlay={menu}>
		    <a className="ant-dropdown-link">
		      操作 <Icon type="down" />
		    </a>
		</Dropdown>
	),
}]

class Exp extends React.Component {
	constructor(props) {
		super(props)
		this.expActionsCreators = bindActionCreators(expActionsCreators, this.props.dispatch)
	}
	componentWillMount() {
		this.expActionsCreators.getStuIngExp()

	}
	render() {
		let expPaConf = paginationConfig
		expPaConf.total = this.props.total ? this.props.total : 0
		return (
			<Layout style={{minHeight:'100%'}}>
	          <Content style={{ margin: '0 16px' }}>
	            <Breadcrumb style={{ margin: '12px 0' }}>
	              <Breadcrumb.Item>实验列表</Breadcrumb.Item>
	            </Breadcrumb>
	            <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>
	              <Table columns={columns} dataSource={this.props.list} rowKey="id" pagination={paginationConfig}/>
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