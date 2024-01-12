### ⭐️ Container Pattern

=> 커스텀 훅으로 대체 가능

장점 : 해당 패턴을 활용하면 자연스럽게 관심사 분리를 구현하게 된다. Presentational 컴포넌트는 UI를 담당하는 순수함수로 작성하게 되는 반면, Container 컴포넌트는 상태과 데이터를 책임지게 된다.

Presentational은 순수 컴포넌트로 어떤 데이터든 받아 출력할 수 있으므로 앱의 여러 곳에서 다양한 목적으로 활용할 수 있다.

#### Presentational Component (UI 담당 컴포넌트!)

Presentational 컴포넌트는 props를 통해 데이터를 받는다. 이 컴포넌트의 기능은 받은 데이터를 화면에 표시하는 것이며 그 목적을 위해 css 시트를 포함한다.
데이터는 건드리지 않는게 핵심이다!

#### Container 컴포넌트 (로직 담당 컴포넌트!)

이 컴포넌트는 외부 API로부터 데이터를 받아 Presentational 컴포넌트한데 데이터를 전달해주는 역할을 한다. 스타일시트는 포함하지 않는다.

Container/Presentational 패턴은 훅 함수로 대체 가능하다. Container 컴포넌트 없이도 비즈니스 로직을 hook으로 분리함으로서 stateless 컴포넌트를 쉽게 만들 수 있게 되었다!

### ⭐️ Observer Pattern

observer 패턴에서 특정 객체를 구독할 수 있는데, 구독을 관리하는 객체를 Observable이라고 하고, 구독하는 주체들을 Observer라고 한다. 이벤트가 발생할 때마다 Observable은 모든 Observer에게 이벤트를 전파한다.

Observable 객체는 보통 주요 3가지 특징을 포함한다.

1. observers : 구독하는 Observer들이 포함된 배열. 이벤트가 발생할 때마다 이 요소들한테 이벤트를 전파한다.
2. subscribe : Observer를 Observer 배열에 추가한다.
3. unsubscribe : Observer 배열에서 Observer를 제거한다.
4. notify : 등록된 모든 Observer한테 이벤트를 전파한다.

장점 : Observer를 사용하면 관심사의 분리와 단일 책임의 원칙을 강제하기에 좋은 방법이다. Observer 객체는 Observable과 강하게 결합되어 있지 않다. (바로 들어가는 게 아니라, subscibe로 간접적으로 들어가기 떄문이다.) Observable 객체는 이벤트가 일어나면, Observer가 준 데이터를 받아 처리하는 역할을 한다. 구독한 모든 observer에게 데이터를 전파해서 이벤트를 발생시킨다.
observer는 각자 이벤트를 발생시키고 Observable은 오직 이벤트를 감지하고, 전파시킨다는 점에서 책임이 잘 분리된 패턴이다
