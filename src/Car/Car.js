import React from 'react';

const car = (props) => {
    return (
        <div>
            <p> Marca: {props.marca}, modello: {props.modello}, prezzo: {props.prezzo} {props.children} </p>
        </div>
    );
};

export default car;