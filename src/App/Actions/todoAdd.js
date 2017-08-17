export default (val) => {
  return {
    type: 'TODO_ADD',
    payload: {
      id: 0,
      title: 'Created todo',
      completed: false
    }
  }
}