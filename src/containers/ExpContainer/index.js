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
	Form,
	Row,
	Col,
	Input,
	Button
} from 'antd'

const {
	Content
} = Layout
const FormItem = Form.Item;
const formItemLayout = {
	labelCol: {
		span: 5
	},
	wrapperCol: {
		span: 19
	},
};

function mapStateToProps(state) {
	let {
		exp
	} = state
	return {
		list: exp.list,
		total: exp.totalRecords
	}
}
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
	render: (text) => {
		if (text.xszt === 3) {
			return <a href={'/tjsyzb/'+text.id}>提交实验准备</a>
		}
		if (text.xszt === 2) {
			return <a href={'/tjsyjl/'+text.id}>提交实验记录</a>
		}

	},
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
	              <Breadcrumb.Item>正在进行的实验</Breadcrumb.Item>
	            </Breadcrumb>
	            <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>
	            	<Form
				        className="ant-advanced-search-form"
				        onSubmit={this.handleSearch}
				      >
				        <Row gutter={40}>
							<Col span={6}>
								<FormItem {...formItemLayout} label={'实验编号'}>
					              <Input placeholder="实验编号" />
					          </FormItem>
				          	</Col>
				          	<Col>
				            <Button type="primary" htmlType="submit">查询</Button>
				            <Button style={{ marginLeft: 8 }} htmlType="reset">
				              清除
				            </Button>
				          </Col>
				        </Row>
				      </Form>
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