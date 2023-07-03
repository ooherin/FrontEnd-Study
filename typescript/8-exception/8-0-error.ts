function move(direction: "up" | "down" | "left" | "right" | "he") {
  let position = { x: 0, y: 0 };
  switch (direction) {
    case "up":
      position.y += 1;
      break;
    case "down":
      position.y -= 1;
    case "left":
      position.x -= 1;
    case "right":
      position.y += 1;
      break;
    default:
      throw new Error(`unknown direction: ${direction}`);
  }
}
