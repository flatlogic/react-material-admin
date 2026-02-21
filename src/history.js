import { createBrowserHistory, createMemoryHistory } from 'history';

const history =
  typeof window !== 'undefined'
    ? createBrowserHistory()
    : createMemoryHistory({
        initialEntries: [],
      });

export default history;
