const fs = require("fs");
const input = fs.readFileSync("pyramid_sample_input.txt", "utf8");

//Parse info from the tree input file
const lines = input.trim().split("\n");
const target = parseInt(lines[0].split(" ")[1]);
const pyramid = lines.slice(1).map((line) => line.split(",").map(Number));

//Recursively travel through nodes of the pyramid to find the path that equals the target
function findPath(level, index, current, target, path = "") {
  if (level === pyramid.length - 1) {
    return current * pyramid[level][index] === target ? path : false;
  }

  const left = findPath(
    level + 1,
    index,
    current * pyramid[level][index],
    target,
    path + "L"
  );
  if (left) return left;

  const right = findPath(
    level + 1,
    index + 1,
    current * pyramid[level][index],
    target,
    path + "R"
  );
  if (right) return right;

  return false;
}

const result = findPath(0, 0, 1, target);
fs.writeFileSync("pyramid_sample_output.txt", result ? result : "No solution");
