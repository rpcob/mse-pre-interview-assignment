import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Take the react component and show it on the screen
// ReactDOM.render(<App />, document.getElementById('root'));
// You can use the following as well.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);