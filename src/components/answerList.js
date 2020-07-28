import React from 'react';
import bird from '../assets/image/bird.jpg';

export default function Answer() {
    return (
        <div className="answer">
            <div className="answer__list">
                <ul className="answer__type">
                    <li className="answer__item">
                        <span className="answer__input">
                            <input type='radio' className="item" value='1' />
                        </span>
                        {1}
                    </li>
                    <li className="answer__item">
                        <span className="answer__input">
                            <input type='radio' className="item" value='1' />
                        </span>
                        {2}                
                    </li>
                    <li className="answer__item">
                        <span className="answer__input">
                            <input type='radio' className="item" value='1' />
                        </span>
                        {3}                
                    </li>
                    <li className="answer__item">
                        <span className="answer__input">
                            <input type='radio' className="item" value='1' />
                        </span>
                        {4}
                    </li>
                    <li className="answer__item">
                        <span className="answer__input">
                            <input type='radio' className="item" value='1' />
                        </span>
                        {5}                
                    </li>
                    <li className="answer__item">
                        <span className="answer__input">
                            <input type='radio' className="item" value='1' />
                        </span>
                        {6}                
                    </li>
                </ul>
            </div>
            <div className="answer__info">
                <div className="info-bird">
                    <img className="question__image" src={bird} alt="bird" />
                    <div className="name-bird">
                        <h2 className='title'>Орел</h2>
                        <hr />
                        <h4 className='title-lat'>Orel</h4>
                        <hr />
                        <audio className='audio' controls />
                    </div>
                </div>
                <p className="bird-text">ssfdsffffffffssssssssssssssssssssssssssssssssssssssssssssdfsdf sdfsdfsdfsd ds sdsdsds d d s sd sd d sd sdsssssssssssssssssssssssssssssssss
                sddds                           sd sd sdssd sd ss
                s s ssd       sdssddsessssssssssweefgvf         ewesssssssssssssssssssssssssssssssssssssss</p>
            </div>    
        </div>
    )
}