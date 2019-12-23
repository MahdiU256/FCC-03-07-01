import React, { Component } from 'react';

class Quote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: '',
			author: ''
		};
	}

	render() {
		return (
			<React.Fragment>
				<p className="quote" id="text">
					{this.state.quote}
				</p>
				<spam className="author" id="author">
					{this.state.author}
				</spam>
			</React.Fragment>
		);
	}
}

export default Quote;
