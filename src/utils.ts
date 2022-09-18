export default function makeStatus(lastGuess: number, correctNumber: number): string {
    if (lastGuess === correctNumber) {
        return "You got it!"
    } else {
        return "Nope. " + ((lastGuess > correctNumber) ? "Lower" : "Higher");
    }
};
