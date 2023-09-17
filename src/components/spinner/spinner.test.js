import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Spinner from './spinner';

describe('Component: Spinner', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <Spinner />
        <span>Spinner component</span>
      </Router>,
    );

    expect(getByText(/Spinner component/i)).toBeInTheDocument();
  });
});
