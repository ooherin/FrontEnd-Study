//forwardRef : react에서 props로 ref를 바로 넘기는 것은 불가능하다.
//React 컴포넌트는 기본적으로 ref라는 props를 가지고 있어 그것과 겹치기 때문에,
//ref 사용시 forwardRef 사용을 권장한다.
//React함수형 컴포넌트에서 ref prop을 사용하기 위해 사용해야 하는 함수가 forwardRef이다.

import { forwardRef, useRef } from "react";

//함수형 컴포넌트에서) 부모 컴포넌트에서 자식 컴포넌트 안의 DOM element에 접근하고 싶다면?
//forwardRef를 사용해야 한다.

//useRef : Dom element에 직접 접근하기 위해 사용하는 hook이다.

//ref의 타입을 React.ForwardedRef을 써주어야 한다.
//PropsWithRef를 자주 쓸 것 같지는 않고, ref의 타입인 React.ForwardedRef<HTMLInputElement>
//를 더 자주 쓸 것 같다.
const ChildComponent = forwardRef(
  //MutableRefObject<T | null>
  (props, ref: React.ForwardedRef<HTMLInputElement>) => {
    return <input type="text" ref={ref} />;
  }
);

const ParentComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef?.current?.focus();
  };

  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={handleFocus}>인풋 포커스</button>
    </div>
  );
};

export default ParentComponent;

//useImperativeHandle를 사용하는 링크
//https://dygreen.tistory.com/entry/React-forwardRef-%EC%82%AC%EC%9A%A9%EB%B2%95

//https://blog.leaphop.co.kr/blogs/35

//ref 타입 오류 수정
//https://velog.io/@jungsangu/Typescript%EC%97%90%EC%84%9C-React-forwardRef-%ED%83%80%EC%9E%85-%EC%97%90%EB%9F%AC
