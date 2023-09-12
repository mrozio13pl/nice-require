/* eslint-disable no-empty */
'use strict';

const fs = require('fs');
const path = require('path');

/**
 * If a given module is a file path, ensures that it is expressed as an absolute path.
 * @private
 */
function formatPath (_module) {
    const modulePath = path.resolve(path.dirname(module.parent.filename), _module);
    return fs.existsSync(modulePath) ? modulePath : _module;
}

/**
 * Tries to import a module. Returns `undefined` if fails.
 * @param {String} module - Module you want to import. 
 * @returns Required module or `undefined`.
 */
module.exports = function (_module) {
    try { return require(formatPath(_module)); } catch {}
};

/**
 * Tries to dynamically import a module. Returns `undefined` if fails.
 * @param {String} module - Module you want to import. 
 * @returns {Promise} Required module or `undefined`.
 * @todo Add support for file paths.
 */
module.exports.promise = async function (_module) {
    try { return await import(_module); } catch {}
};