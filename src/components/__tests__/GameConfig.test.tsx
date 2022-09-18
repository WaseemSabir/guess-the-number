import {cleanup, fireEvent, render} from "@testing-library/react";
import React from "react";
import GameConfig from "../GameConfig";
import {screen} from '@testing-library/dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer";


afterEach(cleanup)
Enzyme.configure({adapter: new Adapter()});

it('should render without crashes', () => {
    const {unmount} = render(getGameConfig());
    unmount();
});

it("should trigger reset on click", () => {
    const baseProps = {
        resetNumber: jest.fn()
    }
    render(getGameConfig(baseProps));
    fireEvent.click(screen.getByTestId("reset-button"));
    expect(baseProps.resetNumber).toHaveBeenCalledTimes(1);
});

it("Should trigger set lower bound when value changes", () => {
    const baseProps = {
        setLowerBound: jest.fn()
    }
    const wrapper = shallow(getGameConfig(baseProps));
    wrapper.find("input").at(0).simulate('change', {target: {value: 2}});
    expect(baseProps.setLowerBound).toHaveBeenCalledTimes(1);
    expect(baseProps.setLowerBound).toBeCalledWith(2);
});

it("Should trigger set upper bound when value changes", () => {
    const baseProps = {
        setUpperBound: jest.fn()
    }
    const wrapper = shallow(getGameConfig(baseProps));
    wrapper.find("input").at(1).simulate('change', {target: {value: 100}});
    expect(baseProps.setUpperBound).toHaveBeenCalledTimes(1);
    expect(baseProps.setUpperBound).toBeCalledWith(100);
});

it('Match snapshot', () => {
    const component = renderer.create(
        getGameConfig()
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

function getGameConfig(
    props: any = {}
) {
    let {resetNumber, setLowerBound, setUpperBound, upperBound, lowerBound} = props

    if (!resetNumber) {
        resetNumber = () => {
        }
    }

    if (!setLowerBound) {
        setLowerBound = (v: number) => {
        }
    }
    if (!setUpperBound) {
        setUpperBound = (v: number) => {
        }
    }
    if (!upperBound) {
        upperBound = 10
    }
    if (!lowerBound) {
        lowerBound = 1
    }

    return (
        <GameConfig
            resetNumber={resetNumber}
            setLowerBound={setLowerBound}
            setUpperBound={setUpperBound}
            upperBound={upperBound}
            lowerBound={lowerBound}
        />
    );
}
