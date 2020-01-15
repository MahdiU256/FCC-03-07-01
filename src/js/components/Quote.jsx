import React, { Component } from 'react';

class Quote extends Component {
	componentDidMount() {
		setTimeout(this.props.actions, 250);
	}

	render() {
		return (
			<React.Fragment>
				<header className="header">Random Quote Machine</header>
				<article className="body">
					<section className="quotes">
						<p id="text">{this.props.quote}</p>
						<span id="author">{this.props.author}</span>
					</section>
					<section className="click">
						<a id="tweet-quote" href="twitter.com/intent/tweet">
							Tweet Quote
						</a>
						<button id="new-quote" onClick={this.props.actions}>
							New Quote
						</button>
					</section>
				</article>
				<footer className="footer">
					Created by Mahdi Uddin, 2019. The API used in this project was{' '}
					<a className="ref" href="https://thesimpsonsquoteapi.glitch.me/">
						The Simpsons Quote API
					</a>, created by{' '}
					<a className="ref" href="https://jluboff-portfolio.glitch.me/">
						Jason Luboff
					</a>.
				</footer>
			</React.Fragment>
		);
	}
}

export default Quote;