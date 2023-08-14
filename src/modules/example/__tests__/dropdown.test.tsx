import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../store';
import Example from '../Example';

interface Props {
  statusEvents: (a:string) => void;
}

describe('Root component', () => {
  function renderApp(props?: Props) {
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
