import React from 'react';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  const todoList = todos.map(todo => {
    const label = todo.completed ? '作業中にする' : '完了にする'

    return (
      <li key={todo.id}>
        {todo.title}
        <button 
          onClick={() => toggleTodo(todo.id, todo.completed)}
          className={`${todo.completed ? 'doing' : 'done'}`}
        >
          {label}
        </button>
        <button 
          onClick={() => deleteTodo(todo.id)}
          className='delete'
        >
          削除
        </button>
      </li>
    );
  });
  return <ul>{todoList}</ul>;
}

export default TodoList;