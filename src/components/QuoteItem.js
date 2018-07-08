// @flow
import React from 'react';

type Props = {
  author: string,
  text: string,
};

const QuoteItem = (props: Props) => (
  <div>
    <div>{props.text}</div>
    <div>-- {props.author}</div>
  </div>
);

export default QuoteItem;
