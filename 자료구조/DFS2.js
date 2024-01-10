function solution(k, d) {
  const N = d.length;
  const visited = new Array(N).fill(0);
  let ans = 0;

  function dfs(k, cnt) {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < N; j++) {
      if (k >= d[j][0] && !visited[j]) {
        visited[j] = 1;
        console.log("visited", visited);
        dfs(k - d[j][1], cnt + 1);
        visited[j] = 0;
        console.log("백트레킹", visited);
      }
    }
  }

  dfs(k, 0);
  return ans;
}

solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]);
