// @flow
import * as React from 'react';
import QuoteItem from './QuoteItem';
import { Wrapper, Quote, EditButton, DeleteButton } from './Quotes.styles';

type Props = {
  quotes: Array<Object>,
  editMode: boolean,
  startEditing: (number) => void,
  delete: (number) => void,
};

const Quotes = (props: Props) => {
  const renderQuoteList = () => {
    let quoteList = 'Loding...';

    if (props.quotes) {
      quoteList = props.quotes.map(({ id, text }) => (
        <Quote key={`quote-${id}`}>
          {!props.editMode && (
            <React.Fragment>
              <EditButton type="button" onClick={() => props.startEditing(id)}>
                Edit
              </EditButton>
              <DeleteButton type="button" onClick={() => props.delete(id)}>
                Delete
              </DeleteButton>
            </React.Fragment>
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
