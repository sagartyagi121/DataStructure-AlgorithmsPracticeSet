
var maxSubArray = function(nums) {
	let newA = [];
	let zeroCount = 0;
	for (let i = 0; i<nums.length; i++) {
		if (nums[i] !== 0) newA.push(nums[i]);
		else zeroCount++;
	}
	
	for (let j = 0 ; j < zeroCount ; j++) {
		newA.push(0);
	}
	
  return newA; 
};

// Do not edit the line below.
exports.maxSubArray = maxSubArray;

// *********************************************************************************
// Test case
// *********************************************************************************

const program = require('./program');
const chai = require('chai');

it('Test Case #1', function () {
  chai.expect(program.maxSubArray([0,1,0,3,12])).to.deep.equal([1,3,12,0,0]);
});

it('Test Case #2', function () {
  chai.expect(program.maxSubArray([0])).to.deep.equal([0]);
});
it('Test Case #3', function () {
  chai.expect(program.maxSubArray([0,0])).to.deep.equal([0,0]);
});
it('Test Case #4', function () {
  chai.expect(program.maxSubArray([0,0,-1,4,1,0])).to.deep.equal([-1,4,1,0,0,0]);
});
