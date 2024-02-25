import { cartesianProduct } from "./index"

describe("cartesianProduct", () => {
  it("should generate the Cartesian product of input arrays", () => {
    const inputArrays = [["a", "b"], ["x", "y"], ["1", "2"]]
    const expectedResult = [
      ["a", "x", "1"], ["a", "x", "2"],
      ["a", "y", "1"], ["a", "y", "2"],
      ["b", "x", "1"], ["b", "x", "2"],
      ["b", "y", "1"], ["b", "y", "2"]
    ]
    const result = cartesianProduct(inputArrays)
    expect(result).toEqual(expectedResult)
  })

  it("should return an empty array if input array is empty", () => {
    const inputArrays: string[][] = []
    const result = cartesianProduct(inputArrays)
    expect(result).toEqual([[]])
  })

  it("should handle arrays with different lengths", () => {
    const inputArrays = [["a"], ["x", "y"], ["1", "2", "3"]]
    const expectedResult = [
      ["a", "x", "1"], ["a", "x", "2"], ["a", "x", "3"],
      ["a", "y", "1"], ["a", "y", "2"], ["a", "y", "3"]
    ]
    const result = cartesianProduct(inputArrays)
    expect(result).toEqual(expectedResult)
  })

})
