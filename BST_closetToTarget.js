// sol1  O(logn) time | O(logn) space

function findClosestValueInBst(tree, target) {
  return findClosetValueInBstHelper(tree, target, tree.value);
}

function findClosetValueInBstHelper(tree, target, closest) {
	if (tree === null) return closest;
	// initially first value is considered to be closest and then 
  // recursively we are checking which node gives minimum diff bw target 
  // and node value. 
  // if node is greater than target then look at left node and check the diff. 
  // if node is less than target then look at right node value and check diff. 
  // return the nearest value.
  
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value;
	}
	
	if (tree.value > target) {
		return findClosetValueInBstHelper(tree.left, target, closest)
	} else if (tree.value < target) {
		return findClosetValueInBstHelper(tree.right, target, closest)
	} else {
		return closest;
	}
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;


// test program


const program = require('./program');
const chai = require('chai');

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

it('Test Case #1', function () {
  const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.left = new BST(13);
  root.right.left.right = new BST(14);
  root.right.right = new BST(22);
  const expected = 13;
  const actual = program.findClosestValueInBst(root, 12);
  chai.expect(actual).to.deep.equal(expected);
});
