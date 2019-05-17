// This problem was asked by Google.
// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, 
// and deserialize(s), which deserializes the string back into the tree.

// Tree Node
function Node(val) {
  this.val = val;
  this.left = this.right = null;
}

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);

three.left = four;
three.right = five;
one.left = two;
one.right = three;

// Serialize
// convert Tree Node to string
function serialize(root) {
  let res = [];
  serializer(root, res);
  return res.join(",");
}

// helper method
function serializer(node, output) {
  // recursive
  if (!node) {
    output.push("#");
    return;
  }

  output.push(node.val);
  serializer(node.left, output);
  serializer(node.right, output);
}

// Deserialize
// convert string to Tree Node
function deserialize(data) {
  data = data.split(",");
  let index = 0;

  function deserializer(data) {
    if (index > data.length || data[index] === "#") {
      return null;
    }

    let node = new Node(parseInt(data[index]));
    index++;
    node.left = deserializer(data, index);
    index++;
    node.right = deserializer(data, index);
    return node;
  }

  return deserializer(data);
}

const data = serialize(one);
console.log(data); // serialize
console.log(deserialize(data));
