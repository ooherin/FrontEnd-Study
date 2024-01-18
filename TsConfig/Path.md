#### ⭐️path <br/>

=> 경로 별칭 등을 등록할 수 있습니다 .

```json
{
  "compilerOptions": {
    "paths": {
      "@utils/*": [
        './src/common/utilities/*'
      ]
    }
  }
}
```

위와 같이 설정하면 모듈을 import 할 때 해당 절대 경로로 import 할 수 있습니다. paths를
설정할 때 굳이 `baseUrl`을 또 설정할 필요는 없습니다.

#### ⭐baseUrl <br/>

규모가 크지 않은 프로젝트의 경우 위에 있는 path로 절대 경로를 설정할 필요까진 없다. 그럴 때 사용하는 것이 baseUrl을 사용해서 내부 모듈의 파일 위치를 적는 방법이다.
다음과 같이 보통 사용한다.

```json
{
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

다음과 같이 baseUrl과 path를 동시에 쓸 수도 있다. baseUrl을 src로 지정해놓았으므로 paths에서
src 주소를 생략하였다.

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "#utils/*": [
        "common/utilities/*"
      ],
      "#math-utils/*": [
        "common/utilities/math/*"
      ]
    }
  }
}
```

경로 별칭 설정 팁

```json

{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "#/*": [
        "*"
      ]
    }
  }
}
```

https://www.daleseo.com/tsconfig-path-mapping/