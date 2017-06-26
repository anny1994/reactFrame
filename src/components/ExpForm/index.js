import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {
	Form,
	Row,
	Col,
	Input,
	Button,
	DatePicker
} from 'antd'
import './index.less'
import {
	disabledDate
} from 'constants/constant'
const FormItem = Form.Item
const formItemLayout = {
	labelCol: {
		span: 8
	},
	wrapperCol: {
		span: 16
	},
}

class ExpForm extends React.Component {
	static propTypes = {
		formData: PropTypes.object,
		formfield: PropTypes.arrayOf(
			PropTypes.array.isRequired
		).isRequired,
		show: PropTypes.bool.isRequired, //展示表单或是表单提交
		submitCallback: PropTypes.func //提交回调函数
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.submitCallback(values)
			}
		})
	}

	handleReset = () => {
		this.props.form.resetFields()
	}
	getFields = () => {
		let dateFormat = "YYYY-MM-DD HH:mm:ss"
		const {
			getFieldDecorator
		} = this.props.form
		let {
			formfield,
			formData
		} = this.props
		const children = []
		for (let i = 0; i < formfield.length; i++) {
			let label = formfield[i][0],
				type = formfield[i][1],
				labelText = formfield[i][2],
				valueText, nodeEl;
			//格式化初始值
			if (this.props.show) {
				if (type === 'time') {
					valueText = moment(formData[label], dateFormat)
					nodeEl = <DatePicker style={{'width':'100%'}} showTime format="YYYY-MM-DD HH:mm:ss" disabled/>
				} else {
					valueText = formData[label] ? formData[label] : '--'
					nodeEl = <Input placeholder={labelText} disabled = {this.props.show}/>
				}
			} else {
				if (type === 'time') {
					nodeEl = <DatePicker
								style={{'width':'100%'}}
								disabledDate={disabledDate}
      							showTime
      							format="YYYY-MM-DD HH:mm:ss"/>
				} else {
					valueText = ''
					nodeEl = <Input placeholder={labelText}/>
				}

			}

			children.push(
				<Col span={8} key={i}>
		          	<FormItem {...formItemLayout} label={labelText}>
		            	{getFieldDecorator(label,{
		            		initialValue:valueText
		            	})(
		              	// <Input placeholder={formfield[i][k]} disabled = {this.props.show}/>
							nodeEl
		            	)}
		          	</FormItem>
       			</Col>
			)
		}
		return children
	}
	render() {
		return (
			<Form
		        className="cym-show-form"
		        onSubmit={this.handleSubmit}
		      >
		        <Row gutter={40}>{this.getFields()}</Row>
		        {this.props.show?'':
					 <Row>
			          <Col span={24} style={{ textAlign: 'right' }}>
			            <Button type="primary" htmlType="submit">提交</Button>
						<Button style={{ marginLeft: 8 }}  onClick={this.handleReset}>
			              重置
			            </Button>
			          </Col>
			        </Row>
			    }
		    </Form>
		)
	}
}
ExpForm = Form.create({})(ExpForm)
export default ExpForm