export default async function Read(props) {
  //props의 params안에 있는 id를 동적으로 가져올 수 있다.
  const res = await fetch(
    process.env.NEXT_PUBLIC_URL + `topics/${props.params.id}`,
    {
      cache: "no-store",
    }
  );
  const topic = await res.json();
  console.log(props);
  return (
    <>
      <div>{props.params.id}</div>
      <h2>{topic.title}</h2>
      <div>{topic.body}</div>
    </>
  );
}
