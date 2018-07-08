// @flow
import * as React from 'react';

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

  console.log(props.editedQuote);

  return (
    <form onSubmit={props.submit}>
      <label htmlFor="quote" />
      <input
        id={id}
        type="text"
        name="quote"
        value={quote}
        onChange={props.changed}
      />
      <label htmlFor="author" />
      <div>
        {!props.editMode ? (
          <button type="submit">Submit</button>
        ) : (
          <React.Fragment>
            <button type="submit">Update</button>
            <button type="submit" onClick={props.stopEditind}>
              Cancel
            </button>
          </React.Fragment>
        )}
      </div>
    </form>
  );
}

export default Input;
