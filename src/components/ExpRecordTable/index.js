import React from 'react';
import PropTypes from 'prop-types'
import {
	Table
} from 'antd'
class ExpRecordTable extends React.Component {
	static propTypes = {
		data: PropTypes.array.isRequired,
		columns: PropTypes.array.isRequired,
		handleRowRender: PropTypes.func.isRequired
	}

	render() {
		console.log(this.props)
		return (
			<Table columns={this.props.columns} dataSource={this.props.data} expandedRowRender={record=>this.props.handleRowRender(record)} rowKey="id" pagination={false}/>
		);
	}
}

export default ExpRecordTable