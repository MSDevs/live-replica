/**
 * Created by barakedry on 6/19/15.
 */
'use strict';

const Utils = {
    isValid: function (val) {
        // val === val for cases val is NaN value
        return val === val;
    },
    concatPath: function (path, suffix) {
        if (path && suffix) {
            return [path, suffix].join('.');
        }

        return path || suffix;
    },
    wrapByPath: function wrapByPath(value, path) {

        let levels,
            wrapper,
            curr,
            i,
            len;

        if (!path) {
            return value;
        }

        levels = path.split('.');
        len = levels.length;
        i = 0;
        wrapper = {};
        curr = wrapper;

        while (i < (len - 1)) {
            curr[levels[i]] = {};
            curr = curr[levels[i]];
            i++;
        }

        curr[levels[i]] = value;

        return wrapper;
    },

    hasSamePrototype: function (obj1, obj2) {
        return typeof obj1 === 'object' && Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2);
    },

    once(fn) {
        let lastResult, called = false;
        return function (...args) {
            if (called) { return lastResult; }

            lastResult = fn.call(this, ...args);
            fn = null;
            called = true;
            return lastResult
        }
    },

    SERIALIZED_FUNCTION: 'function()'
};

// export default Utils;
module.exports = Utils;