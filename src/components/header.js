import React from 'react';

export default function Header(props) {
    return (
        <div className="header">
            <h1 className="title-header">
                <span className="word-sound">Song</span>
                <span className="word-bird">Bird</span>
            </h1>
            <h3 className="score">
                {props.score}
            </h3>
        </div>
    )
}