/* todoListRootContainer.js */

import { connect } from 'react-redux';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions';
import TodoList from './todoList';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    newTodo: ( text ) => dispatch(addTodo(text)),
    toggledTodo: ( index ) => dispatch(toggleTodo(index)),
    setFilter: ( filter ) => dispatch(setVisibilityFilter(filter))
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(TodoList);