import React from 'react';

interface GameStateProps {
    lower: string,
    upper: string,
    lastGuess: string,
    status: string | null
}

function GameState(props: GameStateProps) {
    const {lower, upper, lastGuess, status} = props

    return (
        <>
            <h3>Play!</h3>
            <div>Guess the number between {lower} and {upper}</div>
            <div>Last guess: {lastGuess}</div>
            {
                status && <div>{status}</div>
            }
        </>
    );
}

export default GameState;
