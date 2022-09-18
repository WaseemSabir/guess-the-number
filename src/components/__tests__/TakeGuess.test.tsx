import {cleanup, render} from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import GameState from "../GameState";
import TakeGuess from "../TakeGuess";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";


afterEach(cleanup)
Enzyme.configure({adapter: new Adapter()});

it('should render without crashes', () => {
    const {unmount} = render(getTakeGuess());
    unmount();
});

it('should match the last snapshot', () => {
    const component = renderer.create(
        getTakeGuess()
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it("Should trigger newGuess on make guess button click", () => {
    const baseProps = {
        onNewGuess: jest.fn()
    }
    const wrapper = shallow(getTakeGuess(baseProps));
    wrapper.find("input").simulate('change', {target: {value: 100}});
    wrapper.find("button").simulate('click')
    expect(baseProps.onNewGuess).toHaveBeenCalledTimes(1);
    expect(baseProps.onNewGuess).toBeCalledWith(100);
});


function getTakeGuess(props: any = {}) {
    let {onNewGuess} = props

    onNewGuess = onNewGuess ? onNewGuess : (v: number) => {
    }

    return (
        <TakeGuess onNewGuess={onNewGuess}/>
    );
}
