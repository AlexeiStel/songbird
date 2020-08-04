import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Question from './components/question';
import Answer from './components/answer';
import Button from './components/button';
import randomInteger from './components/random';
import AnimalInfo from './components/animalInfo';
import dataAnimals from './components/dataAnimals';
import correct from './assets/audio/correct.mp3';
import error from './assets/audio/error.mp3';
import myImage from './assets/image/animal.png';
import finalImage from './assets/image/Cup.jpg';

import './css/style.css';

const startState = {
   animals: {
     name: "******",
     image: myImage,
     description:
       "SoundAnimal! Игра - узнай животное по его голосу. Послушай аудио и выбери зверя!"
   },
   activeNumberTab: 0,
   randomNum: randomInteger(0, 5),
   score: 0,
   increaseScore: 5,
   isButton: false,
   isDivined: false,
   selectItem: 0,
   pressedItem: new Set(),
   classInfo: "hidden",
   classHint: "visible",
   classAnswer: new Array(6).fill("dot"),
   playing: false,
   final: "final__wrapper-hidden",
   finalImage: "final_image-none"
};

class App extends React.Component {
   state = startState;

   render() {
   return (
         <>
            <Header />
            <Question />
            <div className="answer">
              <Answer />
              <AnimalInfo />
            </div>
            <Button 
               name="Next level"
              />
        </>
      )
   }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );