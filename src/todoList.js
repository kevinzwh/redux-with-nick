/* todoList.js */

import React from 'react';
import Todo from './todo';

const TodoList = React.createClass({
  render() {
    return (
      <div>
        {
          this.props.todos.map(
            (el, i) => {
              return <Todo key={i} index={i} {...this.props} {...el}>{ el.text }</Todo>;
            }
          )
        }
      </div>
    )
  }
});

export default TodoList;