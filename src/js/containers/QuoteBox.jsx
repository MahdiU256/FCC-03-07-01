import React, { Component } from 'react'
import { connect } from 'react-redux'
import Quote from '../components/Quote.jsx';
import { dataRequest } from "../actions/index.js";

class QuoteBox extends Component {
	componentDidMount() {
		this.props.actions.dataRequest();
	}
	
	render() {
		return (
			<React.Fragment>
				<Quote />
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return { 
		quote: state.quote,
		author: state.author 
	};
}

const mapDispatchToProps = (dispatch) => {
	return { actions: bindActionCreators(dataRequest, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox)
