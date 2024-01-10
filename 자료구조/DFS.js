const DFS = (graph, startNode) => {
  const visited = [];
  const stack = [];

  //시작노드는 루트 노드인 A
  stack.push(startNode);

  while (stack.length !== 0) {
    const node = stack.shift();
    console.log("node", node);

    if (!visited.includes(node)) {
      //노드 방문시 vistied에 넣기
      visited.push(node);
      console.log("visited", visited);
      console.log("graph[node]", graph[node]);

      //밑에 방문할 노드가 없다면 if문 빠져 나가기
      if (!graph[node]) continue;
      // 방문하지 않은 이웃 노드를 역순으로 스택에 추가
      stack.push(...graph[node]);

      console.log("stack", stack);
    }
  }
  return visited;
};

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["A", "G"],
};

const result = DFS(graph, "A");
console.log(result);

function solution(k, dungoens) {
  let answer = 0;
  const visited = Array.from({ length: dungoens.length }).map((e) => false);

  //기존의 answer와 비교해서 더 크면 L이 answer가 된다.
  answer = Math.max(answer, L);

  DFS(visited, k, 0);
  return answer;
}

//깊이 우선 탐색
function DFS(visited, hp, L) {
  for (let i = 0; i < dungoens.length; i++) {
    //방문 가능한 던전이면
    //앞에서 방문했던 던전은 바로 넘어간다.
    //그 다음 깊이의 던전을 찾을 수 있는 조건이 된다.
    if (!visited[i] && dungoens[i][0] <= hp) {
      //방문 표시
      visited[i] = true;
      //남은 체력
      const leftHp = hp - dungoens[i][1];
      //L은 이번 턴에서 방문한 L의 개수

      //방문 했다면, 통과 된 것이므로, 다시 깊이 탐색
      DFS(leftHp, L + 1);
      //백트레킹
      //해당 루트에 있는 다른 경로를 파악하기 위해서 다시 해당 던전을 false로
      //돌려놓는 것
      visited[i] = false;
    }
  }
}
