
var checkDublicate = function(nums) {
	let newA = {};
	let zeroCount = 0;
	for (let i = 0; i < nums.length; i++) {
		if (newA.hasOwnProperty(nums[i])) return true;
		else newA[nums[i]] = i;
	}
	
  return false; 
};

//************************************************************
// Test case
//************************************************************

const program = require('./program');
const chai = require('chai');

it('Test Case #1', function () {
  chai.expect(program.maxSubArray([0,1,3,12])).to.deep.equal(false);
});
