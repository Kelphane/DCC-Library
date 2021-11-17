import React from 'react';
import reactDom from 'react-dom';
import App from './components/App';

const element = <h1>Hello World!</h1>;

reactDom.render(<App />, document.getElementById('root'));