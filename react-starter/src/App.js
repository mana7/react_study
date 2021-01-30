//src/App.jsはAppコンポーネント(関数)が定義されたファイル

//Reactを利用する場合、必ずreactをインポートする必要がある
import React from 'react';

//コンポーネント
  //JSXというJS構文の拡張を利用すればJSにHTMLのような構文を書ける。
  //JSXではブラウザは動作しないので通常のJSに変換する必要があるが、
  //Create React Appで作成した開発環境では変換も自動で行ってくれる。
  //そのため、こちら側では何もせずにJSXを利用できる。

//関数名がコンポーネント名になる。先頭は必ず大文字にする。アロー 関数での宣言も可能
function Props(props) {
  return <p>Hello, {props.name}</p>;
}

function HelloReact() {
  return <h2>Hello React</h2>;
}

//関数コンポーネントが受け取るデータのことをPropsと言う。
//Propsを利用したコンポーネントは下記のように記述可能
 //受け取ったPropsの中身を変更することは禁止
function Hello({ name }) {
  return <p>Hello, {name}</p>;
}

function HelloFull({ firstName, lastName }) {
  return (
    <p>Hello, {firstName} {lastName}</p>
  );
}

// 定義したコンポーネントは下記のように利用可能　※return内
function App() {
  const newName = 'Foo';
  const data = {
    firstName: 'John',
    lastName: 'Doe'
  };
  const books1 = [
    {id:1, title:'aaa'},
    {id:2, title:'bbb'},
    {id:3, title:'ccc'},        
  ];

  const books2 = [
    {id:4, title:'ddd'},
    {id:5, title:'eee'},
    {id:6, title:'fff'},        
  ];  
  const listItems = books2.map(book => <li key={book.id}>{book.title}：mapの実行結果を「変数」に格納しJSXに埋め込む</li>);

  const listFun = library => 
    books2.map(book => (
      <li key={book.id}>
        {book.title}：
        {library}
      </li>
    ))

  function handleClick1(message) {
    console.log('clicked');
    alert('alert clicked');
  }
  function handleClick2(message) {
    console.log(`clicked, ${message}`);
    alert(`alert clicked, ${message}`);
  } 
  function handleClickEvent(event, message) {
    event.preventDefault();
    console.log(`Hello, ${message}`);
    alert(`Hello, ${message}`);    
  }

  return (
    //ルートのタグは1つまで
    <div>
      <HelloReact />
      {/* "Hoge"をPropsとしてHelloコンポーネントに渡す */}
      <Hello name="Hoge" />
      <Hello name={newName} />
      <HelloFull {...data} />
      <ul>
        {books1.map(book => ( //半角カッコを使う
          //key属性は必ず指定する
          <li key={book.id}>{book.title}：「直接」mapをJSXに埋め込む</li>
        ))}
      </ul>
      <ul>{listItems}</ul>
      <ul>{listFun('mapの実行結果を返す「関数」をJSXに埋め込む')}</ul>

      {/* 属性はキャメルケース(onClick)で指定し、イベントハンドラは関数を指定する必要がある */}
      <button onClick={handleClick1}>click1</button>        
      <button onClick={() => handleClick2('React')}>click2</button>
      <a href="http://reactjs.org/" onClick={event => handleClickEvent(event, 'Event')}>
        React
      </a>
    </div>
  );
}

//他のJSファイルからインポートして利用できるようにするため、exportする
export default App;
