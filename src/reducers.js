/* reducers.js */

import { visibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions';

const initState = {
  visibilityFilter: visibilityFilters.SHOW_ALL,
  todos: [
    {text:'item 1', completed: false},
    {text:'item 2', completed: true},
    {text:'item 3', completed: false}
  ]
}

export default function todoApp(state = initState, action) {

  switch(action.type) {
    case ADD_TODO:
      let newTodos = [ ...state.todos, { text: action.text, completed: false } ];
      return Object.assign( {}, state, { todos: newTodos } );
    case TOGGLE_TODO:
      let toggledTodo = state.todos.map( function(el, i) {
        if (action.index == i) {
          return Object.assign( {}, el, { completed: !el.completed  });
        } 
        return el;
      });
      return Object.assign( {}, state, { todos: toggledTodo } );
    case SET_VISIBILITY_FILTER:
      return Object.assign( {}, state.visibilityFilter, { visibilityFilter: action.filter });
    default:
      return state;
  }
}


