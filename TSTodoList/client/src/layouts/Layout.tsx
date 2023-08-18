import * as S from "./style";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <S.HeaderWrapper>
        <div
          style={{
            fontSize: "1.8rem",
            fontWeight: "700",
            color: "#e6fb03",
          }}
        >
          TODOLIST
        </div>
      </S.HeaderWrapper>
      <Outlet />
    </>
  );
};
export default Layout;
