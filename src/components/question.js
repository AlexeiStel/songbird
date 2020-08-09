import React from 'react';
import Player from './player';


export default function Question(props) {

   const categoriesAnimal = [
       {
        id: 1,
        category: 'Воробьинообразные'
       },
       {
        id: 2,
        category: 'Ржанкообразные'
    },
    {
        id: 3,
        category: 'Аистообразные'
    },
    {
        id: 4,
        category: 'Гусеобразные'
    },
    {
        id: 5,
        category: 'Соколообразные'
    },
    {
        id: 6,
        category: 'Журавлеобразные'
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
