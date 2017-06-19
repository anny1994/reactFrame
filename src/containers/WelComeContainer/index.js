import React from 'react';
import {
	connect
} from 'react-redux';


function mapStateToProps(state) {
	return {

	};
}

class WelCome extends React.Component {

	render() {
		return (
			<div>
				欢迎使用
			</div>

		);
	}
}

export default connect(
	mapStateToProps,
	// Implement map dispatch to props
)(WelCome)