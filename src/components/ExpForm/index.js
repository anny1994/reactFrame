import React from 'react';
import PropTypes from 'prop-types'

import {
	Form,
	Row,
	Col,
	Input,
	Button
} from 'antd';
import './index.less'
const FormItem = Form.Item;
const formItemLayout = {
	labelCol: {
		span: 8
	},
	wrapperCol: {
		span: 16
	},
};

class ExpForm extends React.Component {
	static propTypes = {
		formData: PropTypes.object,
		formfield: PropTypes.arrayOf(
			PropTypes.string.isRequired
		).isRequired
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	}

	handleReset = () => {
		this.props.form.resetFields();
	}

	getFields = () => {
		const {
			getFieldDecorator
		} = this.props.form;
		const formfield = this.props.formfield
		const children = [];
		for (let i = 0; i < formfield.length; i++) {
			children.push(
				<Col span={8} key={i}>
		          	<FormItem {...formItemLayout} label={formfield[i]}>
		            	{getFieldDecorator(formfield[i])(
		              	<Input placeholder={formfield[i]} disabled/>
		            	)}
		          	</FormItem>		
       			</Col>
			);
		}
		return children;
	}
	render() {
		return (
			<Form
		        className="cym-show-form"
		        onSubmit={this.handleSearch}
		      >
		        <Row gutter={40}>{this.getFields()}</Row>
		        <Row>
		          <Col span={24} style={{ textAlign: 'right' }}>
		            <Button type="primary" htmlType="submit">提交</Button>
		            <Button style={{ marginLeft: 8 }} htmlType="reset" onClick={this.handleReset}>
		              重置
		            </Button>
		          </Col>
		        </Row>
		    </Form>
		);
	}
}
ExpForm = Form.create({})(ExpForm);
export default ExpForm