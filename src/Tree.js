import React, { useEffect, useRef } from "react";
import "./Tree.css";

export default function Tree({ levels, path }) {
  const pathArray = path.split("");
  const treeRef = useRef(null);

  useEffect(() => {
    const highlightedNodes =
      treeRef.current.querySelectorAll(".node.highlighted");
    highlightedNodes.forEach((node, index) => {
      node.style.animationDelay = `${index * 200}ms`;
    });
  }, [path]);

  return (
    <div className="tree" ref={treeRef}>
      {levels.map((level, levelIndex) => (
        <div key={levelIndex} className="level">
          {level.map((value, nodeIndex) => {
            let isHighlighted = false;
            if (levelIndex === 0) {
              isHighlighted = true;
            } else if (levelIndex <= pathArray.length) {
              const currentPath = pathArray.slice(0, levelIndex).join("");
              const expectedIndex = currentPath.split("R").length - 1;
              isHighlighted = nodeIndex === expectedIndex;
            }
            return (
              <div
                key={nodeIndex}
                className={`node ${isHighlighted ? "highlighted" : ""}`}
              >
                {value}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
