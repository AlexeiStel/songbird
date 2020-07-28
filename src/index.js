import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Question from './components/question';
import AnswerList from './components/answerList';
import Button from './components/button';
import './css/style.css';

function App() {
    return (
        <div>
            <Header />
            <Question />
            <AnswerList />
            <Button />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );