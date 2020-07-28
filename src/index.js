import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Question from './components/question';
import './css/style.css';

function App() {
    return (
        <div>
            <Header />
            <Question />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );