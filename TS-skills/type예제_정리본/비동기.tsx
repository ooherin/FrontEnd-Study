const fetchFromServer = (id: string): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 100);
  });
};

const asyncFun = async (): Promise<string> => {
  const result = await fetchFromServer("111");
  return `The result : ${result.success}`;
};

async () => {
  const result = await asyncFun();
  console.log(result);
};

asyncFun().then((result) => console.log(result));
