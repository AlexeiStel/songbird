import React from 'react';
import Player from './player';

export default function AnimalInfo(props) {
    return (
        <div className="about-animal">
        <p  style={{margin: 15}} className={props.classHint}>{props.indication}</p>
            <div className={props.classInfo}>
            <div className="animal__info">
                <img className="question__image" src={props.image} alt="animal" />
                <div className="animal-name">
                    <h2 className='title'>{props.name}</h2>
                    <hr />
                    <h4 className='title-latin'>{props.latin}</h4>
                    <hr />
                    <Player className='audio' src={props.audio} toplay={props.toplay} controls />
                </div>
            </div>
            <p className="animal-text">
                {props.description}
            </p>
        </div>    
    </div>
    )
}