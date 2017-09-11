import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateTime } from '../actions';

class Clock extends Component {
	
	componentDidMount() {
		this.timeId = setInterval(
			() => this.tick(),
			1000
		);
	};

	componentWillUnmount() {
		clearInterval(this.timeId);
	};

	tick() {
		this.props.dispatch(updateTime());
	};

	render() {
		return (
			<Jumbotron className='jumbotron'>
				<h1>{this.props.time}</h1>
			</Jumbotron >	
		);
	};
}

const mapStateToProps = (state) => {
	return {
		time: state.time
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	};
};

Clock = connect(
	mapStateToProps,
	mapDispatchToProps
)(Clock);

export default Clock;