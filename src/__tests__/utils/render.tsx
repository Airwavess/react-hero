import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../../redux/root-reducer';

interface RenderHelperArgs {
  preloadState?: any;
  routePath?: string;
}

export function renderHelper(ui: React.ReactElement, args?: RenderHelperArgs) {
  const store = createStore(reducer, args?.preloadState);
  const routePath = args?.routePath || '/';

  const wrapper: React.FC = ({ children }) => (
    <Provider store={store}>
      <Router initialEntries={[routePath]}>
        <Route path='/heroes/:heroId?'>{children}</Route>
      </Router>
    </Provider>
  );

  return {
    ...render(ui, { wrapper }),
    store,
  };
}
