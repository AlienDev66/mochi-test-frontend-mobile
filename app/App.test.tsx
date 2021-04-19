import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
    const tree: any = renderer.create(<App />).toJSON();

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });

    it('has 1 child', () => {
        expect(tree?.children?.length).toBe(1);
    });
});
