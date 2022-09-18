import {cleanup, render} from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import GameState from "../GameState";


afterEach(cleanup)

it('should render without crashes', () => {
    const {unmount} = render(getGameState());
    unmount();
});

it('should match the last snapshot', () => {
    const component = renderer.create(
        getGameState()
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

function getGameState() {
    return (
        < GameState lower={"10"} upper={"100"} lastGuess={"9"} status={"You got it!"}/>
    );
}
