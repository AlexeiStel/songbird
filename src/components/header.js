import React from 'react';

export default function Header() {
    return (
        <div className="header">
            <h1 className="titleH">
                <span className="word-song">Song</span>
                <span className="word-bird">Bird</span>
            </h1>
            <h3 className="score">
                Score: 0
            </h3>
        </div>
    )
}