/**
 * Generates the Cartesian product of the input arrays.
 * @param array The input array containing arrays of elements.
 * @returns The Cartesian product of the input arrays.
 */
export function cartesianProduct<T>(array: T[][]): T[][] {
  // Initialize the results array with an empty array.
  let results: T[][] = [[]];
  
  // Iterate through each array in the input array.
  for (let i = 0; i < array.length; i++) {
      // Get the current subarray.
      let currentSubArray = array[i];
      
      // Initialize a temporary array to store the new results.
      let temp: T[][] = [];
      
      // Iterate through each existing result.
      for (let j = 0; j < results.length; j++) {
          // Iterate through each element in the current subarray.
          for (let k = 0; k < currentSubArray.length; k++) {
              // Concatenate the current result with the current element from the subarray.
              temp.push([...results[j], currentSubArray[k]]);
          }
      }      
      // Update the results array with the new results.
      results = temp;
  }  
  // Return the final Cartesian product.
  return results;
}
