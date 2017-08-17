const initialState = {
  todos: [
    {
    title: 'Test todo',
    completed: false
    },
    {
      title: 'Second test todo',
      completed: true
    }
  ]
}

export const addTodo = ((val) => ({ 
  type:'TODO_ADD', 
  payload: {
    title: val,
    completed: false
  }
}))

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return { 
        ...state, 
        todos: state.todos.concat(action.payload) 
      }
    
    default: 
      return state
  }
}