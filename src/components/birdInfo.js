import React from 'react';
import Player from './player';

export default function BirdInfo(props) {
    return (
        <div className="about-bird">
        <p  style={{margin: 15}} className={props.classHint}>{props.indication}</p>
            <div className={props.classInfo}>
            <div className="bird__info">
                <img className="question__image" src={props.image} alt="bird" />
                <div className="bird-name">
                    <h2 className='title'>{props.name}</h2>
                    <hr />
                    <h4 className='title-latin'>{props.latin}</h4>
                    <hr />
                    <Player className='audio' src={props.audio} toplay={props.toplay} controls />
                </div>
            </div>
            <p className="bird-text">
                {props.description}
            </p>
        </div>    
    </div>
    )
}