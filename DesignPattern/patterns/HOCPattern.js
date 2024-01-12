//리액트에서는 컴포넌트를 가져와 새 컴포넌트를 반환하는 방식이다.
//예제
//만약 params에 id가 있으면, 컴포넌트를 반환하고 없다면 아무것도 반환하지 않는 기능
//이 필요하다고 해보자

import { useParams } from "react-router-dom";

const ReturnOnlyHasId = () => {
  const { somethingId } = useParams();

  if (!somethingId) {
    return null;
  }
  return <div>원래 그리려는 컴포넌트</div>;
};

//만약 중간에 로직이 많이 추가된다면, 위의 로직은 분리되어 가독성이 떨어진다.
import { useParams } from "react-router-dom";

const ReturnOnlyHasId1 = () => {
  const { somethingId } = useParams();

  //다른 로직1
  if (!somethingId) {
    return null;
  }

  //다른 로직2

  //다른 로직3
  return <div>원래 그리려는 컴포넌트</div>;
};

//위와 같은 로직이 재사용될 것 같다면, 이는 고차 컴포넌트로 분리
//시킬만한 이유가 있다.

export const ReturnOnlyHasId2 = (WrappedComponent) => {
  //반환할 컴포넌트를 정의한다.
  //이 컴포넌트에서
  const Component = (props) => {
    const { somethingId } = useParams();

    if (!somethingId) {
      return null;
    }

    return <WrappedComponent {...props} somethingId={somethingId} />;
  };

  return Component;
};
