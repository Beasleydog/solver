// Function to parse input and extract target and pyramid
function parseInput(input) {
  const lines = input.trim().split("\n");
  const target = parseInt(lines[0].split(" ")[1]);
  const pyramid = lines.slice(1).map((line) => line.split(",").map(Number));
  return { target, pyramid };
}

// Function to solve the pyramid puzzle
function solvePyramid(pyramid, target) {
  function findPath(level, index, current, path = "") {
    if (level === pyramid.length - 1) {
      return current * pyramid[level][index] === target ? path : false;
    }

    const left = findPath(
      level + 1,
      index,
      current * pyramid[level][index],
      path + "L"
    );
    if (left) return left;

    const right = findPath(
      level + 1,
      index + 1,
      current * pyramid[level][index],
      path + "R"
    );
    if (right) return right;

    return false;
  }

  const result = findPath(0, 0, 1);
  return result ? result : "";
}

export { parseInput, solvePyramid };
