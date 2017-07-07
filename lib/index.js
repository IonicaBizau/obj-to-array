"use strict";

/**
 * objToArray
 * Convert objects into arrays
 *
 * @name objToArray
 * @function
 * @param {Object} obj The data object.
 * @param {String} keyName An optional key name to be appended, storring the key value.
 * @returns {Array} An array of objects.
 */
module.exports = (obj, keyName) => {
    obj = obj || {};
    const keys = Object.keys(obj);
    return keyName ? keys.map(key => {
             const o = obj[key];
             o[keyName] = key;
             return o;
           })
         : keys.map(key => obj[key])
};
