//propsWithChildren: 말 그대로 children을 가진 props타입을 의미한다.
//children을 명시적으로 사용하고 싶을 떄 사용하는 타입이다.
import { PropsWithChildren } from "react";

// type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };
// 소스 코드 : P에 chilren이 자동으로 삽입되는 것을 볼 수있다.
//children?: ReactNode 을 안쓰는 효과!

//제네릭에 속성을 정의해서 props의 타입을 정의하면 된다.
//children은 자동으로 들어간다.
type ComponentProps = PropsWithChildren<{
  title: string;
}>;

function MyComponent(props: ComponentProps) {
  const { title, children } = props;
  return (
    <div>
      <p>{title}</p>
      {children}
    </div>
  );
}

export default MyComponent;
