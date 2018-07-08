// @flow
import * as React from 'react';
import QuoteItem from './QuoteItem';
import Spinner from './Spinner/Spinner';
import { Wrapper, Quote, ButtonsWrapper, EditButton, DeleteButton } from './Quotes.styles';

type Props = {
  quotes: Array<Object>,
  editMode: boolean,
  startEditing: (number) => void,
  delete: (number) => void,
};

const Quotes = (props: Props) => {
  const renderQuoteList = () => {
    let quoteList = <Spinner />;

    if (props.quotes) {
      quoteList = props.quotes.map(({ id, text }) => (
        <Quote key={`quote-${id}`}>
          {!props.editMode && (
            <ButtonsWrapper>
              <EditButton type="button" onClick={() => props.startEditing(id)}>
                Edit
              </EditButton>
              <DeleteButton type="button" onClick={() => props.delete(id)}>
                Delete
              </DeleteButton>
            </ButtonsWrapper>
          )}
          <QuoteItem text={text} />
        </Quote>
      ));
    }

    return quoteList;
  };

  return <Wrapper>{renderQuoteList()}</Wrapper>;
};

export default Quotes;
