const universe = {
  sun: "star",
  //sriius: "star", ✅ 오타잡음
  serius: "star",
  earth: { type: "planet", parent: "sun" },
} satisfies {
  [key in "sun" | "serius" | "earth"]:
    | { type: string; parent: string }
    | string;
};

//타입 추론을 유지하면서, 각각의 속성들은 satisfires에 적은 타입으로 다시 한번 검사한다.
