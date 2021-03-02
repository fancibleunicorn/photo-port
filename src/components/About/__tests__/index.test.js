import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// clears leftover memory data to avoid false results
afterEach(cleanup);

// describe declares the component we're testing
describe('About component', () => {
    // First Test
    it('renders', () => {
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />); 
        expect(asFragment()).toMatchSnapshot();
    })
})