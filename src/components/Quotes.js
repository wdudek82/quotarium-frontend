// @flow
import * as React from 'react';
import axios from 'axios';
import Input from './Input';
import QuoteItem from './QuoteItem';

type Props = {};

type State = {
  quotes: Array<Object>,
  authors: Array<Object>,
};

class Quotes extends React.Component<Props, State> {
  state = {
    authors: [],
    quotes: [],
  };

  componentDidMount() {
    const authors = this.getAuthors();
    const quotes = this.getQuotes();

    this.setState(() => ({
      authors,
      quotes,
    }));
  }

  getAuthors = () => {
    axios.get('api/authors/').then((res) => {
      this.setState(() => ({ authors: res.data }));
    });
  };

  getQuotes = () => {
    axios.get('api/quotes').then((res) => {
      this.setState(() => ({ quotes: res.data }));
    });
  };

  renderQuoteList() {
    let quoteList = 'Loding...';

    console.log(this.state);

    if (this.state.quotes) {
      quoteList = this.state.quotes.map(({ id, author, text }) => (
        <QuoteItem key={`quote-${id}`} author={author} text={text} />
      ));
    }

    return quoteList;
  }

  render() {
    console.log(this.state);
    return (
      <div>
        Quotes Component
        <Input authors={this.state.authors} />
        {this.renderQuoteList()}
      </div>
    );
  }
}

export default Quotes;
