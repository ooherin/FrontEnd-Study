import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const { pathName } = useLocation();
  // 현재 페이지의 url의 path를 가지고오는 훅

  useEffect(() => {
    if (!accessToken) {
      navigate("/", {
        state: {
          from: pathName,
          // 이전 페이지의 path를 기억하기 위해 데이터 전송
        },
        // navigitaion의 state옵션을 활용하면
        // 쿼리 스트링이나 파람으로 데이터를 보내지 않아도 원하는 데이터를 전송할 수 있다
        // 따라서 굳이 사용자에게 노출시키지 않을 데이터라면 state로 보내도 괜찮음
        // 그러나 대부분의 데이터는 사용자에게 보여주는 것이 좋습니다
      });
    }
  }, [accessToken, navigate]);

  return accessToken ? <Outlet /> : <Navigate to={"/"} />;
};
export default PrivateRoute;

/*
1. dbms - 30~40분
2. dbms, nodejs 기본 // login, signUp, accestoken, jwttoekn, cookie, session
3. crud // chatting(web socket)
4. type-script * 2
5. (보강) typescript -> todoList, 촛불시간, 최종 프로젝트 온보딩 --- 비대면
    1조 5명 // 2조 5명 // 3조 5명
*/
