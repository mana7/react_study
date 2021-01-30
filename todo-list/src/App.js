import React, { useState, useMemo } from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import useTodo from './hooks/useTodo';

function App() {
  //Todoのstateと更新ロジックを取得
  const { todos, toggleTodo, deleteTodo, addTodo } = useTodo();
  //選択中の絞り込みのstateとfilterを更新する関数
  const [filter, setFilter] = useState('all'); //デフォルトはallラジオボタン
  //絞り込みのラジオボタンのイベントハンドラ
  const handleFilter = event => {
    setFilter(event.target.value); //選択されたラジオボタンにstateを変更する
  }
  //絞り込みを適用したTodo
  const filteredTodos = useMemo(() => { //値の不要な再計算 / コンポーネントの再描画をスキップする(= React.memo)。描画結果もメモできる
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'all':
      default:
        return todos;
    }
  }, [todos, filter]) //依存している要素を格納した配列を第二引数に入れる。todosかfilterが更新された時のみ、絞り込み後のTodoメモを再更新する

  return (
    <div>
      <h1>Todo List</h1>
      <TodoFilter selectedFilter={filter} handleFilter={handleFilter}/>      
      <TodoForm addTodo={addTodo} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
