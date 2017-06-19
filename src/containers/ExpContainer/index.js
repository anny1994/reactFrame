import React from 'react';
import {
	connect
} from 'react-redux';


function mapStateToProps(state) {
	return {

	};
}

class Exp extends React.Component {

	render() {
		return (
			<div>
				实验列表
			</div>

		);
	}
}

export default connect(
	mapStateToProps,
	// Implement map dispatch to props
)(Exp)