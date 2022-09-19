const {normalizeURL} = require('./crawl.js');
const {test, expect} = require('@jest/globals');

test('normalize protocol', () => {
    const input = 'https://wagsLane.dev/path';
    const received = normalizeURL(input);
    const expected = 'wagslane.dev/path'
    expect(received).toBe(expected);
});


test('normalize slash', () => {
    const input = 'https://wagslane.dev/path/';
    const received = normalizeURL(input);
    const expected = 'wagslane.dev/path';
    expect(received).toBe(expected);
});

test('normalize capital Letters', () => {
    const input = "https://wagsLane.Dev/path";
    const received = normalizeURL(input);
    const expected = "wagslane.dev/path";
    expect(received).toBe(expected);
});

test('normalize http', () =>{
    const input  = 'http://wagslane.dev/path';
    const received = normalizeURL(input);
    const expected = 'wagslane.dev/path';
    expect(received).toBe(expected);
});
