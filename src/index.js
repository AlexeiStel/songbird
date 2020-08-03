import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Question from './components/question';
import Answer from './components/answer';
import Button from './components/button';
import AnimalInfo from './components/animalInfo';

import './css/style.css';

class App extends React.Component {
  
 render() {
   return (
         <>
            <Header />
            <Question />
            <div className="answer">
              <Answer />
              <AnimalInfo/>
            </div>
            <Button name="Next level" />
        </>
      )
   }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );