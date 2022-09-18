import React from 'react';

interface GameConfigProps {
    resetNumber: () => void,
    lowerBound: number,
    setLowerBound: (new_val: number) => void,
    upperBound: number,
    setUpperBound: (new_val: number) => void,
}

function GameConfig(props: GameConfigProps) {
    const {lowerBound, upperBound, resetNumber, setUpperBound, setLowerBound} = props

    return (
        <>
            <h3>Game Config</h3>
            <div>
                <label>Lower bound: </label>
                <input
                    type='number'
                    value={lowerBound}
                    onChange={e => setLowerBound(Number(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor='upper'>Upper bound: </label>
                <input
                    type='number'
                    value={upperBound}
                    onChange={e => setUpperBound(Number(e.target.value))}
                />
            </div>
            <button onClick={resetNumber}>Reset</button>
        </>
    );
}

export default GameConfig;
