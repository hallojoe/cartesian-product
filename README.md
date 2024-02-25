
# cartesian-product

This function generates the Cartesian product of an array of arrays. Given an array of arrays, it returns a new array containing all possible combinations of elements from each array.

## Use 

```typescript
const inputArrays = [[1, 2], ['a', 'b'], ['x', 'y']];
const result = cartesianProduct(inputArrays);
console.log(result);

/* Output: [
    [1, 'a', 'x'], 
    [1, 'a', 'y'], 
    [1, 'b', 'x'], 
    [1, 'b', 'y'], 
    [2, 'a', 'x'], 
    [2, 'a', 'y'], 
    [2, 'b', 'x'], 
    [2, 'b', 'y']
  ] */
```

Also see See tests.

## Install

`npm install @casko/cartesian-product`

