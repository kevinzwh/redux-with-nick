/* todo.jsx */

import React from 'react';

const Todo = React.createClass({
  setChecked() {
    if (this.props.completed) {
      return 'competed';
    } else {
      return 'incomplete';
    }
  },
  handleClick() {
     this.props.toggledTodo(this.props.index);
     console.log(this.props.index);
  },
  render() {
    return (
      <div>
        <div onClick={this.handleClick}>{this.setChecked()}</div>
        <div>{this.props.text}</div>
        <br />
      </div>
    )
  }
});

export default Todo;