import React from 'react';
import TodoListRootContainer from './todoListRootContainer';
import { Provider } from 'react-redux';
import store from './store';

const App = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <TodoListRootContainer />
      </Provider>
    );
  }
})

export default App;