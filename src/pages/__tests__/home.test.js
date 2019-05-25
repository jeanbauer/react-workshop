// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import 'react-testing-library/cleanup-after-each';
// this adds jest-dom's custom assertions
import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';
import Home from '../home'

describe('Home', () => {
    const wizards = [{
        name: 'Erri Potter',
        house: 'Gryffindor',
        bloodStatus: 'dunno'
    }]

    it('shows image description', () => {
        const { getByAltText } = render(<Home wizards={wizards} />)

        expect(getByAltText('Logo of Gryffindor')).toBeInTheDocument()
    })

    it('shows house title', () => {
        const { getByText } = render(<Home wizards={wizards} />)

        expect(getByText('House: Gryffindor')).toBeInTheDocument()
    })
})
