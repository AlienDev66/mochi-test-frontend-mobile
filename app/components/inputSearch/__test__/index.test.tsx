import React from 'react';
import renderer from 'react-test-renderer';
import InputSearch from '..';

describe('<InputSearch />', () => {
    const tree = renderer
        .create(<InputSearch onPress={() => {}} onChangeText={() => {}} />)
        .toJSON();
    it('has 2 child', () => {
        if (tree) expect(tree.children.length).toBe(2);
    });
    it('has 3 child', () => {
        if (tree) expect(tree).toMatchSnapshot();
    });
});
