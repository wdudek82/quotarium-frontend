// @flow
import React from 'react';
import axios from 'axios';
import Input from './Input';
import Quotes from './Quotes';
import { Wrapper, Header, H1, H3, Footer } from './App.styles';

type Props = {};

type State = {
  quotes: Array<Object>,
  editMode: boolean,
  editedQuote: Object | null,
};

class App extends React.Component<Props, State> {
  state = {
    quotes: [],
    editMode: false,
    editedQuote: null,
  };

  componentDidMount() {
    const quotes = this.getQuotes();

    this.setState(() => ({
      quotes,
    }));
  }

  getQuotes = () => {
    axios.get('api/quotes').then((res) => {
      this.setState(() => ({ quotes: res.data.reverse() }));
    });
  };

  postQuote = (text: string) => {
    axios
      .post('api/quotes/', { text })
      .then((res) => {
        console.log(`quote ${res.data.id} successfully created`);
        this.getQuotes();
      })
      .catch((err) => console.log(err));
  };

  putQuote = (id: number, text: string) => {
    axios
      .put(`api/quotes/${id}/`, { text })
      .then((res) => {
        console.log(`quote ${res.data.id} successfully updated`);
        this.getQuotes();
      })
      .catch((err) => console.log(err));
  };

  deleteQuote = (id: number) => {
    axios.delete(`api/quotes/${id}`)
      .then((res) => {
        console.log(`quote ${id} successfully deleted`);
        this.getQuotes();
      })
      .catch((err) => console.log(err));
  }

  handleSetEditModeOn = (quoteId: ?number) => {
    if (quoteId && quoteId > -1) {
      const editedQuote = this.state.quotes.filter(
        (quote) => quote.id === quoteId,
      )[0];
      this.setState(() => ({ editMode: true, editedQuote }));
    }
  };

  handleSetEditModeOff = () => {
    this.setState(() => ({ editMode: false, editedQuote: null }));
  };

  handleEditedChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const chagedText = e.currentTarget.value;
    this.setState((prevState) => ({
      editedQuote: {
        ...prevState.editedQuote,
        text: chagedText,
      },
    }));
  };

  handleFormSubmit = (e: ?SyntheticEvent<HTMLInputElement>) => {
    if (e) {
      e.preventDefault();

      this.setState(() => ({
        editMode: false,
        editedQuote: null,
      }));

      const { id } = e.target.elements.quote;
      const quote = e.target.elements.quote.value;

      if (!this.state.editMode) {
        this.postQuote(quote);
      } else {
        this.putQuote(id, quote);
      }
    }
  };

  render() {
    return (
      <Wrapper>
        <Header>
          <H1>Quotarium</H1>
          <H3>The Repository of Most Briliant Quotes!</H3>
        </Header>
        <Input
          editMode={this.state.editMode}
          editedQuote={this.state.editedQuote}
          changed={(e) => this.handleEditedChange(e)}
          stopEditind={this.handleSetEditModeOff}
          submit={this.handleFormSubmit}
        />
        <Quotes
          quotes={this.state.quotes}
          editMode={this.state.editMode}
          startEditing={this.handleSetEditModeOn}
          delete={this.deleteQuote}
        />
        <Footer>
          Wojciech Dudek, 2018
        </Footer>
      </Wrapper>
    );
  }
}

export default App;
