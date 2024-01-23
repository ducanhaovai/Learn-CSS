/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: function (val1) {
            if (val === val1) return true;
            throw new Error("Not Equal");
        },
        notToBe: function (val1) {
            if (val !== val1) return true;
            throw new Error("Equal");
        }
    };
};