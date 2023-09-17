import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Copyright from '../copyright/copyright';

describe('Component: Copyright', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <Copyright />
      </Router>,
    );
    const element = getByText(/© 2019 What to watch Ltd./i);

    expect(element).toBeInTheDocument();
  });
});
