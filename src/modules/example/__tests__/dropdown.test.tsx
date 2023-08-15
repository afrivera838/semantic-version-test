import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Example from '../Example';

describe('Root component', () => {
  function renderApp() {
    return {
      ...render(
        <BrowserRouter>
          <Example />
        </BrowserRouter>
      ),
    };
  }

  test('should be in the document', () => {
    const { container } = renderApp();
    expect(container).toMatchSnapshot();
    expect(container).toBeInTheDocument();

    /* const { getByText } = render(<Example />);
    expect(getByText(/Hello Boilerplate!/i)).toBeInTheDocument(); */
  });
});
