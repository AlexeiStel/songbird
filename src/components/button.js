import React from 'react';

export default function Button(props) {
    return (
        <div className="button">
            <button className={"button-next" + (props.active ? ' active' : ' passive')}
             onClick={props.onClick}>
             {props.name}
            </button>
        </div>
    )
}