import React from 'react';
import Player from './player';


export default function Question(props) {

   const categoriesAnimal = [
       {
           id: 1,
           category: 'Домашние'
       },
       {
        id: 2,
        category: 'Парнокопытные'
    },
    {
        id: 3,
        category: 'Грызуны'
    },
    {
        id: 4,
        category: 'Травоядные'
    },
    {
        id: 5,
        category: 'Хищники'
    },
    {
        id: 6,
        category: 'Морские'
    },
   ]

    return (
        <div className="question">
            <div className="question__category">
                <ul className="question__list">
                {
                    categoriesAnimal.map(((item) => (
                        <li className={"question__item" + (props.activeNumberTab === (+item.id - 1) ? " active" : " passive")} key={item.id}>{item.category}</li>
                    )))
                } 
                </ul>
            </div>
            <div className="question__animal-block">
                <img className="question__image" src={props.image} alt="animal" />
                <div className="animal-sound">
                    <p className="question__animal-name">{props.name}</p>
                    <hr />
                    <Player src={props.audio} playing={props.playing} /> 
                </div>
            </div>
        </div>
    )
}
