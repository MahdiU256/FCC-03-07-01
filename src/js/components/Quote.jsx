import React, { Component } from 'react';

class Quote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: '',
			author: ''
		};

		this.onClick = this.onClick.bind(this);
	}

	async componentDidMount() {
		const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
		const data = await res.json();
		this.setState({
			quote: data[0].quote,
			author: data[0].character
		});
	}

	async onClick() {
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
				<header className="header">Random Quote Machine</header>
				<article className="body">
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
				</article>
				<footer className="footer">
					Created by Mahdi Uddin, 2019. The API used in this project was{' '}
					<a href="https://thesimpsonsquoteapi.glitch.me/">The Simpsons Quote API</a>, created by{' '}
					<a href="https://jluboff-portfolio.glitch.me/">Jason Luboff</a>.
				</footer>
			</React.Fragment>
		);
	}
}

export default Quote;
