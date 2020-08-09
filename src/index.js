import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Question from './components/question';
import Answer from './components/answer';
import Button from './components/button';
import randomInteger from './components/random';
import BirdInfo from './components/birdInfo';
import birdsData from './components/birdsData';
import correct from './assets/audio/correct.mp3';
import error from './assets/audio/error.mp3';
import myImage from './assets/image/bird.jpg';
import finalImage from './assets/image/Cup.jpg';

import './css/style.css';

const startState = {
   birds: {
     name: "******",
     image: myImage,
     description:
       "Soundbird! Игра - узнай животное по его голосу. Послушай аудио и выбери зверя!"
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
   
  handleItems = (event) => {
    const item = event.target.closest(".answer__item");
    const index = item.dataset.index;

      if (item === null) {
        return;
      }

    this.setState({
      selectItem: index,
      classInfo: 'visible',
      classHint: 'hidden'
    });

    const handleRightChoise = () => {
      if (this.state.isDivined === false) {
        this.setState({
          score: this.state.score + this.state.increaseScore,
          isDivined: true,
          isButton: true,
          birds: {
            name: 
              birdsData[this.state.activeNumberTab][this.state.randomNum].name,
            image:
              birdsData[this.state.activeNumberTab][this.state.randomNum].image
          }
        });

        if (this.state.activeNumberTab === 5) {
          this.setState({
            final: "final__wrapper"
          });
        }
      }
    }

    const handleIncorrectChoise = () => {
      if (
        this.state.increaseScore > 0 &&
        this.state.pressedItem.has(index) !== false
      ) {
        this.setState({
          increaseScore: this.state.increaseScore - 1
        });
      }
   };

      const pressedItem = this.state.pressedItem;
      pressedItem.add(index);
      this.setState({ pressedItem });
   
    +index === this.state.randomNum 
    ? handleRightChoise() 
    : handleIncorrectChoise();
};
  
  handleChoise = event => {
   const index = +event.currentTarget.dataset.index;
   const classAnswer = this.state.classAnswer.concat();

   const highlihtGreen = () => {
    classAnswer.splice(index, 1, "dot green");
     this.setState({ classAnswer });
     this.audio = new Audio(correct);
     this.audio.play();
     this.setState({ playing: true });
   };

   const highlihtRed = () => {
    classAnswer.splice(index, 1, "dot red");
     this.setState({ classAnswer });
     this.audio = new Audio(error);
     this.setState({ playing: false });
     this.audio.play();
   };

   index === this.state.randomNum ? highlihtGreen() : highlihtRed();
 };

 handleButton = () => {
   if (this.state.isButton) {
     if (this.state.activeNumberTab === 5) {
       this.setState(startState);
       this.setState({
         pressedItem: new Set()
       });
       return;
     }
     this.setState({
       birds: {
         name: startState.birds.name,
         image: startState.birds.image,
         description: startState.birds.description
       },
       randomNum: randomInteger(0, 5),
       increaseScore: startState.increaseScore,
       isButton: startState.isButtonActive,
       isDivined: startState.isDivined,
       pressedItem: new Set(),
       classInfo: startState.classInfo,
       classHint: startState.classHint,
       activeNumberTab: this.state.activeNumberTab + 1,
       classAnswer: startState.classAnswer,
       playing: startState.playing
      });
    }
  };

 render() {
   return (
         <>
            <Header score={this.state.score} />
            <Question 
               activeNumberTab={this.state.activeNumberTab} 
               playing={this.state.playing}
               name={this.state.birds.name}
               image={this.state.birds.image}
               audio={birdsData[this.state.activeNumberTab][this.state.randomNum].audio}
            />
            <div className="answer">
              <Answer 
                activeNumberTab={this.state.activeNumberTab}
                onChoose={event => this.handleItems(event)}
                onClick={event => this.handleChoise(event)}
                random={this.state.randomNum}
                classAnswer={this.state.classAnswer}
              />
              <BirdInfo
                  indication={this.state.birds.description}
                  classHint={this.state.classHint}
                  classInfo={this.state.classInfo}
                  image={
                      birdsData[this.state.activeNumberTab][this.state.selectItem].image
                  }
                  name={
                      birdsData[this.state.activeNumberTab][this.state.selectItem].name
                  }
                  latin={
                      birdsData[this.state.activeNumberTab][this.state.selectItem]
                        .species
                  }
                  audio={
                      birdsData[this.state.activeNumberTab][this.state.selectItem].audio
                  }
                  description={
                      birdsData[this.state.activeNumberTab][this.state.selectItem].description
                  }
              />
            </div>
            <Button 
               name="Next level"
               active={this.state.isButton}
               onClick={() => this.handleButton()}
            />
            <div className={this.state.final}>
              <h1 className="final">
                Score:<span className="final-number">{this.state.score}/30</span>
              </h1>
                  <h2 className={this.state.score === 30 ? "" : startState.finalImage}>
                      Ты - настоящий повелитель птиц!
                  </h2>
                  <img
                    style={
                      { 
                        width: "40%", 
                        height: "auto", 
                        marginBottom: "20px" 
                      }
                    }
                    src={finalImage}
                    className={this.state.score === 30 ? "" : startState.finalImage}
                    alt="winner"
                  />
              <Button
                  name="Try again!"
                  active={this.state.isButton}
                  onClick={() => this.handleButton()}
              />
            </div>
        </>
      )
   }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );