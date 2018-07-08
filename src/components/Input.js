// @flow
import * as React from 'react';
import { Form, InputField, ButtonWrapper, Button } from './Input.styles';

type Props = {
  editMode: boolean,
  editedQuote: Object | null,
  changed: (?SyntheticEvent<HTMLInputElement>) => void,
  stopEditind: (number) => void,
  submit: (void) => void,
};

const Input = (props: Props) => {
  const id = props.editedQuote ? props.editedQuote.id : '';
  const quote = props.editedQuote ? props.editedQuote.text : '';

  return (
    <Form onSubmit={props.submit}>
      <label htmlFor="quote" />
      <InputField
        id={id}
        type="text"
        name="quote"
        value={quote}
        onChange={props.changed}
      />
      <label htmlFor="author" />
      <ButtonWrapper>
        {!props.editMode ? (
          <Button type="submit">Submit</Button>
        ) : (
          <React.Fragment>
            <Button type="submit">Update</Button>
            <Button type="submit" onClick={props.stopEditind}>
              Cancel
            </Button>
          </React.Fragment>
        )}
      </ButtonWrapper>
    </Form>
  );
}

export default Input;
