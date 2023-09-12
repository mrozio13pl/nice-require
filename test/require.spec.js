const { test } = require('uvu');
const assert = require('uvu/assert');

const niceRequire = require('..');

test('nice-require', () => {
    assert.is(niceRequire('..'), require('../index.js'));
    assert.is(niceRequire('uvu'), require('uvu'));
    assert.is(niceRequire('some-non-existing-module'), undefined);
})

test('nice-require dynamically', async () => {
    assert.is.not(await niceRequire.promise('uvu'), undefined)
    assert.is(await niceRequire.promise('some-non-existing-module'), undefined)
})

test.run();