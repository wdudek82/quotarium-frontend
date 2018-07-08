// @flow
import React from 'react';

type Props = {
  text: string,
};

const QuoteItem = (props: Props) => (
  <div>
    <div>{props.text}</div>
  </div>
);

export default QuoteItem;
