/* actions.js */

export const ADD_TODO = 'ADD_TODO',
      TOGGLE_TODO = 'TOGGLE_TODO',
      SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE' 
};

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text
  }
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index: index
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  }
} 