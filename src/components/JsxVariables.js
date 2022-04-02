import React from 'react';

// TODO: Create a `name` variable

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React

function JSXVariables() {
    const name = 'Hector Nava';
    const numLetters = name.length;
    const thought = 'Great';
    return (
        <div className="main-container">
            <div className="container">
                <div className="jumbotron">
                    {/* TODO: Add your name variable */}
                    <h1>Hi! My name is { name }</h1>
                    {/* TODO: Add your number of letters variable */}
                    <h2>My name has { numLetters-1 } letters</h2>
                    {/* TODO: Add your thoughts variable */}
                    <h2>I think React { thought }</h2>
                </div>
            </div>
        </div>
    );
}

export default JSXVariables;
