import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm/>)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm/>);

        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Contact Me is visible', () => {
    it('inserts Contact Me into <h1> tag', () => {
        const { getByTestId } = render(<ContactForm/>);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
    })
})

describe('Submit Button is visible', () => {
    it('creates button', () => {
        const { getByTestId } = render(<ContactForm/>);
        expect(getByTestId('button')).toHaveTextContent('Submit');
    })
})