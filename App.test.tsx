import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
    const tree = renderer.create(<App />).toJSON();
    it('has 3 child', () => {
        if (tree) expect(tree.children.length).toBe(3);
    });
    it('has 3 child', () => {
        if (tree) expect(tree).toMatchSnapshot();
    });
});
