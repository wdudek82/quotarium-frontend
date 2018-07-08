// @flow
import * as React from 'react';

type Props = {
  authors: ?Array<Object>,
};

const Input = (props: Props) => {
  const renderAuthosOptions = () => {
    let authorOptions = '---';

    if (props.authors) {
      authorOptions = props.authors.map(({ first_name: fName, last_name: lName }) => {
        const key = `${fName.toLowerCase()}-${lName && lName.toLowerCase()}`;
        return (
          <option
            key={key}
            value={key}
          >
            {`${fName} ${lName || ''}`}
          </option>
        );
      });
    }

    return authorOptions;
  };

  return (
    <form>
      <label htmlFor="quote">
        <input type="text" name="quote" value="" />
      </label>
      <label htmlFor="author">
        <select name="authors" id="">
          { renderAuthosOptions() }
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;
