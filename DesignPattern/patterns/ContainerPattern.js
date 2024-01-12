//Presentational Component (UI만 담당하는 패턴)

export const DogImage = ({ dogs }) => {
  return dogs.map((dog, i) => <img src={dog} key={i} />);
};

//Container Component(비즈니스 로직만 담당하는 패턴)
export const DogImageContainer = () => {
  const data = fetch("https://dog.ceo/api/breed/labrador/images/random/6")
    .then((res) => res.json())
    .then(({ message }) => this.setState({ dogs: message }));

  return <DogImages dogs={this.state.dogs} />;
};

//커스텀 훅으로 대체 가능
export const useDogImage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json)
      .then((message) => setDogs(message));
  });
  return data;
};
