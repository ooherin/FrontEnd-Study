function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("데이터가 성공적으로 로드됨");
        }, 1000);
    });
}

type FetchDataReturnType = ReturnType<typeof fetchData>;

let data: FetchDataReturnType = fetchData();
