"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartesianProduct = void 0;
/**
 * Generates the Cartesian product of the input arrays.
 * @param array The input array containing arrays of elements.
 * @returns The Cartesian product of the input arrays.
 */
function cartesianProduct(array) {
    // Initialize the results array with an empty array.
    var results = [[]];
    // Iterate through each array in the input array.
    for (var i = 0; i < array.length; i++) {
        // Get the current subarray.
        var currentSubArray = array[i];
        // Initialize a temporary array to store the new results.
        var temp = [];
        // Iterate through each existing result.
        for (var j = 0; j < results.length; j++) {
            // Iterate through each element in the current subarray.
            for (var k = 0; k < currentSubArray.length; k++) {
                // Concatenate the current result with the current element from the subarray.
                temp.push(__spreadArray(__spreadArray([], results[j], true), [currentSubArray[k]], false));
            }
        }
        // Update the results array with the new results.
        results = temp;
    }
    // Return the final Cartesian product.
    return results;
}
exports.cartesianProduct = cartesianProduct;
