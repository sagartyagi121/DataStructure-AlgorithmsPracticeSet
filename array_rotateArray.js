
var rotateArray = function(nums,shift = 0) {
	let newA = {};
	let zeroCount = 0;
	for (let i = 0; i < shift ; i++) {
		// let x = 
			nums.unshift(nums[nums.length -1]);
			console.log('before', nums);
		  nums.pop();
			console.log('after', nums);
	}

  return nums; 
};

exports.rotateArray = rotateArray;

//********************************************************************
// Test Case
//********************************************************************


const program = require('./program');
const chai = require('chai');

it('Test Case #1', function () {
  chai.expect(program.rotateArray([1,2,3,4,5,6,7], 3)).to.deep.equal([5,6,7,1,2,3,4]);
});
