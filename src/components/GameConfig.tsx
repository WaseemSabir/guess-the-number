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
                <label data-testid="lower-bound-label">Lower bound: </label>
                <input
                    data-testid="lower-bound-input"
                    id="lower-bound-input"
                    type='number'
                    value={lowerBound}
                    onChange={e => setLowerBound(Number(e.target.value))}
                />
            </div>
            <div>
                <label data-testid="upper-bound-label">Upper bound: </label>
                <input
                    data-testid="upper-bound-input"
                    id="upper-bound-input"
                    type='number'
                    value={upperBound}
                    onChange={e => setUpperBound(Number(e.target.value))}
                />
            </div>
            <button onClick={resetNumber} data-testid="reset-button">Reset</button>
        </>
    );
}

export default GameConfig;
