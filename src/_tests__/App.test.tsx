import React from "react";
import App from "../App";
import {render, cleanup} from "@testing-library/react";
import renderer, {ReactTestRendererJSON} from 'react-test-renderer';

afterEach(cleanup)

it('should render without crashes', () => {
    const {unmount} = render(<App/>);
    unmount();
});

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

it("test snapshot with default bound", () => {
    const component = renderer.create(
        <App/>,
    );
    let tree = component.toJSON() as ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
});
