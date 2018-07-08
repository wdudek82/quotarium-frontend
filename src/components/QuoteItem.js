// @flow
import React from 'react';
import Wrapper from './QuoteItem.styles';

type Props = {
  text: string,
};

const QuoteItem = (props: Props) => (
  <Wrapper>
    <div>{props.text}</div>
  </Wrapper>
);

export default QuoteItem;
