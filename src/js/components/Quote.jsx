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
				<header className="header">App Header</header>
				<section className="body">
					<h1 className="title">App Title</h1>
				</section>
				<footer className="footer">App Footer</footer>
			</React.Fragment>
		);
	}
}

export default Quote;
