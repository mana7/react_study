//src/index.jsはアプリケーションのメインファイル

//Reactを利用する場合、必ずreactをインポートする必要がある
import React from 'react';
//HTML要素にAppコンポーネントを描画する場合、react-domも必要になる
//今回は、Appコンポーネントを<divid="root"></div>に描画するためインポートする
import ReactDOM from 'react-dom';
//Appコンポーネントをインポートする
import App from './App';
import App2 from './App2';

// Appコンポーネントを<divid="root"></div>に描画する
//src/index.jsなどがビルドされたJSファイルは、public/index.htmlで読み込まれる
//そのため、public/index.htmlのdivid="root"></div>にAppコンポーネントが描画される

ReactDOM.render(
  <React.StrictMode>
    <h1>App1　繰り返しやイベントハンドリング</h1>
    <App />
    <h1>App2 フック</h1>
    <App2 />
  </React.StrictMode>,
  document.getElementById('root')
);

