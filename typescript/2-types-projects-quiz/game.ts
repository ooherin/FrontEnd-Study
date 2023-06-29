/**
 * Let's make a game 🕹
 */
{
  type Direction = "up" | "down" | "left" | "right";

  //객체라서 const를 써도 된다.
  const position = { x: 0, y: 0 };

  function move(direction: Direction) {
    switch (direction) {
      case "up":
        position.y += 1;
        break;
      case "down":
        position.y -= 1;
        break;
      case "left":
        position.x -= 1;
        break;
      case "right":
        position.x += 1;
        break;
      default:
        throw new Error("unknown direction");
    }
  }
  console.log(position); // { x: 0, y: 0}
  move("up");
  console.log(position); // { x: 0, y: 1}
  move("down");
  console.log(position); // { x: 0, y: 0}
  move("left");
  console.log(position); // { x: -1, y: 0}
  move("right");
  console.log(position); // { x: 0, y: 0}
}
