import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
const assert = require('assert');

describe('Testing util functions', () => {
    describe('getFullYear', () => {
        it('Year is 2021', () => {
            assert.equal(getFullYear(), '2021');
        });
    });

    describe('getFooterCopy', () => {
        it('isIndex is false', () => {
            const result = getFooterCopy(false);
            const expected = 'Holberton School main dashboard';
            assert.equal(result, expected);
        });
        it('isIndex is true', () => {
            const result = getFooterCopy(true);
            const expected = 'Holberton School';
            assert.equal(result, expected);
        });
    });

    describe('getLatestNotification', () => {
        it('getLatestNotification', () => {
            const result = getLatestNotification();
            const expected = '<strong>Urgent requirement</strong> - complete by EOD';
            assert.equal(result.__html, expected);
        });
    });
});

// import { render, screen } from '@testing-library/react';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
