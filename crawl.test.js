const {normalizeURL} = require('./crawl.js');
const {test, expect} = require('@jest/globals');

test('normalize https://wagsLane.Dev/path', () => {
    expect(normalizeURL('https://wagsLane.Dev/path')).toBe('wagsLane.Dev/path');
});
