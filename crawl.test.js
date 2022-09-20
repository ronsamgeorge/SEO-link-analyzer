const {normalizeURL, getURLsFromHTML} = require('./crawl.js');
const {test, expect} = require('@jest/globals');

// test('normalize protocol', () => {
//     const input = 'https://wagsLane.dev/path';
//     const received = normalizeURL(input);
//     const expected = 'wagslane.dev/path'
//     expect(received).toBe(expected);
// });


// test('normalize slash', () => {
//     const input = 'https://wagslane.dev/path/';
//     const received = normalizeURL(input);
//     const expected = 'wagslane.dev/path';
//     expect(received).toBe(expected);
// });

// test('normalize capital Letters', () => {
//     const input = "https://wagsLane.Dev/path";
//     const received = normalizeURL(input);
//     const expected = "wagslane.dev/path";
//     expect(received).toBe(expected);
// });

// test('normalize http', () =>{
//     const input  = 'http://wagslane.dev/path';
//     const received = normalizeURL(input);
//     const expected = 'wagslane.dev/path';
//     expect(received).toBe(expected);
// });


test('covert relative to absolute',() => {
    const input = '<<!DOCTYPE html><a href="/xyz">Relative Link</a>';
    const baseURL = 'https://ron.dev/';
    const expected = 'https://ron.dev/xyz';
    const received = getURLsFromHTML(input,baseURL);

    expect(received[0]).toBe(expected);
});


test('total number of links in the HTML body',() => {
    const input = '<<!DOCTYPE html><a href="/xyz">Relative Link</a>';
    const baseURL = 'https://ron.dev/';
    const expected = 'https://ron.dev/xyz';
    const received = getURLsFromHTML(input,baseURL);

    expect(received[0]).toBe(expected);
});


