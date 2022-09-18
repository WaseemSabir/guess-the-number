import React, {useState} from 'react';

interface TakeGuessProps {
    onNewGuess: (new_guess: number) => void
}

function TakeGuess(props: TakeGuessProps) {
    const {onNewGuess} = props
    const [guess, setGuess] = useState('')

    function onMakeGuess() {
        let guess_num = Number(guess);
        onNewGuess(guess_num);
        setGuess('');
    }

    function onKeyDownInInput(event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            onMakeGuess()
        }
    }

    return (
        <>
            <label>Guess: </label>
            <input
                type='number'
                value={guess}
                onChange={e => setGuess(e.target.value)}
                onKeyDown={e => onKeyDownInInput(e)}
            />
            <button onClick={onMakeGuess}>Make guess</button>
        </>
    );
}

export default TakeGuess;
