//モックサーバーとの通信に利用する非同期通信ライブラリ　HTTPクライアント
import axios from 'axios';

const baseUrl = 'http://localhost:3001/todos';

//モックサーバーと通信してTodo取得や更新削除を行う関数を記述する

//Todoを取得する
const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

//Todoを更新する
const update = async (id, newTodo) => {
  const response = await axios.put(`${baseUrl}/${id}`, newTodo);
  //通信が成功したことを通知するため、更新したTodo情報を返却する
  return response.data;
};

//Todoを削除する
const _delete = async id => {
  await axios.delete(`${baseUrl}/${id}`);
  //通信が成功したことを通知するため、削除したTodoのIDを返却する
  return id;
};

//Todoを追加する
const add = async newTodo => {
  const response = await axios.post(baseUrl, newTodo);
  //通信が成功したこと通知するため、追加したTodo情報を返却する
  return response.data;
}

export default { getAll, update, delete: _delete, add };