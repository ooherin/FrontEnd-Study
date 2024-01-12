//provider 패턴은 여러 자식 컴포넌트 간에 데이터를 공유하는 패턴이다.
//장점 : props-drilling없이 데이터를 자식 노드에 전달할 수 있다.
//Provider 패턴을 과하게 사용할 경우,특정 상황에서 이슈가 발생할 수 있다.
//컨텍스트를 참조하는 모든 컴포넌트는 컨텍스트가 변경될 때마다 모두 리렌더링 된다.
//대규모 앱에서 provider 로 묶은 컴포넌트가 너무 많을 경우, 모두 재렌더링 되게 때문에
//문제가 생길 수 있다.
// => 여러 Provider로 쪼개고 선택저으로 감싸는 방법을 사용할 수 있다.

//전역 상태를 생성할 수 있는 createContent
const DataContext = React.createContext();

function App() {
  const data = [];
  return (
    <div>
      <DataContext.Provider value={data}>...다른 컴포넌트</DataContext.Provider>
    </div>
  );
}

//전역상태를 받아서 사용할 수 있는 useContext
function ListItem() {
  const { data } = React.useContext(DataContext);
  return <span>{data.listItem}</span>;
}

//컴포넌트르 직접 ThemeContext.Provider로 래핑하는 대신, HOC를 만들어 간단하게 쓸 수 있다.
//이렇게 하면 전역 변수 로직을 다른 로직과 분리할 수 있으며, 재사용이 가능하다.

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const providerValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

//실제 사용 예제
export default function App() {
  return (
    <div>
      <ThemeProvider>
        <div>theme을 사용하고 싶은 컴포넌트</div>
      </ThemeProvider>
    </div>
  );
}

//styled-component는 themeProvider를 제공하는 데 위랑 같은원리이다.
