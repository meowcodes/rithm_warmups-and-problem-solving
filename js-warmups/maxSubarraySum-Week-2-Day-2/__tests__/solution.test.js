describe("UnitTests", function() {
  it("returns_the_correct_sum", function() {
    // Failure message:
    // see the sample input for test cases
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
    expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toBe(5);
    expect(maxSubarraySum([100, 100, 0, 0, 0], 2)).toBe(200);
    expect(maxSubarraySum([2, 3], 3)).toBe(null);
  });
});
