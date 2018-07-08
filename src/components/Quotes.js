// @flow
import * as React from 'react';
import QuoteItem from './QuoteItem';

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
        <div key={`quote-${id}`}>
          {!props.editMode && (
            <React.Fragment>
              <button type="button" onClick={() => props.startEditing(id)}>
                Edit
              </button>
              <button type="button" onClick={() => props.delete(id)}>
                x
              </button>
            </React.Fragment>
          )}
          <QuoteItem text={text} />
        </div>
      ));
    }

    return quoteList;
  };

  return <div>{renderQuoteList()}</div>;
};

export default Quotes;
