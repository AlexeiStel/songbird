import React from 'react';
import myImage from '../assets/image/bird.jpg';

export default function Question() {
    return (
        <div className="question">
            <div className="question__block">
                <ul className="question__list">
                    <li className="question__item">Разминка</li>
                    <li className="question__item">Воробьиные</li>
                    <li className="question__item">Лесные птицы</li>
                    <li className="question__item">Певчие птицы</li>
                    <li className="question__item">Хищные птицы</li>
                    <li className="question__item">Морские птицы</li>
                </ul>
            </div>
            <div className="question__ans">
                 <img className="question__image" src={myImage} alt="bird" />
                <div className="bird-sound">
                    <p className="question__bird">Орел</p>
                    <hr />
                    <audio className="question__sound" /* src={myAudio} */ controls />
                </div>
            </div>
        </div>
    )
}