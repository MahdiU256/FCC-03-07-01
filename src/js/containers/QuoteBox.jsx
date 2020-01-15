import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Quote from '../components/Quote.jsx';
import { dataRequest } from '../actions/index.js';

export class QuoteBox extends Component {
	render() {
		return (
			<React.Fragment>
				<Quote actions={dataRequest}/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		quote: state.quote,
		author: state.author
	};
};

const mapDispatchToProps = (dispatch) => {
	return { actions: bindActionCreators(dataRequest, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
