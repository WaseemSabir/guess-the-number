import "./styles.css";
import React, {useEffect, useState} from 'react';
import GameConfig from "./components/GameConfig";
import TakeGuess from "./components/TakeGuess";
import GameState from "./components/GameState";

export default function App() {

    // random number between the bounds will be set on start, and each reset click
    const [numberToGuess, setNumberToGuess] = useState(0)
    const [lowerBound, setLowerBound] = useState(1)
    const [upperBound, setUpperBound] = useState(10)
    const [lastGuess, setLastGuess] = useState('none')
    const [status, setStatus] = useState('')

    useEffect(() => {
        // will only run once, on start
        document.title = "Guess the Number"
        resetNumber()
    }, [])

    function resetNumber() {
        // generate random number within the bound
        let range = upperBound - lowerBound;
        let new_number = Math.trunc((Math.random() * range) + lowerBound);
        setNumberToGuess(new_number)
        setStatus('');
        setLastGuess('none')
    }

    function onNewGuess(guess: number) {
        setLastGuess(guess.toString())
        setStatus(makeStatus(guess, numberToGuess))
    }

    function makeStatus(lastGuess: number, correctNumber: number): string {
        if (lastGuess === correctNumber) {
            return "You got it!"
        } else {
            return "Nope. " + ((lastGuess > correctNumber) ? "Lower" : "Higher");
        }
    }

    return (
        <>
            <div>
                <GameState
                    lower={lowerBound.toString()}
                    upper={upperBound.toString()}
                    lastGuess={lastGuess}
                    status={status}/>
                <TakeGuess onNewGuess={onNewGuess}/>
            </div>
            <GameConfig
                lowerBound={lowerBound}
                setLowerBound={setLowerBound}
                upperBound={upperBound}
                setUpperBound={setUpperBound}
                resetNumber={resetNumber}/>
        </>
    );
}
