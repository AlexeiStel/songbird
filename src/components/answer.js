import React from 'react';
import birdsData from './birdsData';

export default function Answer(props) {
    return (
            <div className="answer__list" onClick = {props.onChoose}>
                <ul className="answer__type">
                {birdsData[props.activeNumberTab].map((item) => (
                    <li className="answer__item" key = {item.id} data-index={+item.id - 1}  onClick = {props.onClick}>
                        <div className={props.classAnswer[+item.id - 1]}></div> 
                        {item.name}                           
                    </li>
                ))}
                </ul>
            </div>
    )
}
