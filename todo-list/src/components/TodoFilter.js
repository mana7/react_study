import React from 'react';

const filters = [
  { type: 'all', label: 'すべて'},
  { type: 'active', label: '作業中'},
  { type: 'completed', label: '完了'}
];

function TodoFilter({ selectedFilter, handleFilter}) {
  return filters.map(filter => (
    <label key={filter.type} className={filter.type}>
      <input
        type="radio"
        value={filter.type}
        checked={filter.type === selectedFilter} //一致するラジオボタンを選択状態にする
        onChange={handleFilter}  //input要素が変化した時のイベントハンドラーを紐づける   
      />
      {filter.label}
    </label>
  ))
}

export default TodoFilter;