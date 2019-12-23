import React, { Component } from 'react';

class Quote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: '',
			author: ''
		};
	}

	async componentDidMount() {
		const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
		const data = await res.json();
		this.setState({
			quote: data[0].quote,
			author: data[0].character
		});
	}

	render() {
		return (
			<React.Fragment>
				<section className="quotes">
					<p id="text">{this.state.quote}</p>
					<span id="author">{this.state.author}</span>
				</section>
				<section className="click">
					<a id="tweet-quote" href="twitter.com/intent/tweet">
						Tweet Quote
					</a>
					<button id="new-quote" onClick={this.onClick}>
						New Quote
					</button>
				</section>
			</React.Fragment>
		);
	}
}

export default Quote;
