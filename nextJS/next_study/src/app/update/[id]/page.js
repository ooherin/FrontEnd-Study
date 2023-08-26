//layout js와 결합
"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [content, setContent] = useState({
    title: "",
    body: "",
  });
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_URL + `topics/${id}`)
      .then((res) => res.json())
      .then((result) => {
        const { title, body } = result;
        setContent({
          title,
          body,
        });
      });
  }, []);

  const onChange = (e) => {
    console.log(e.target.value);
    setContent({
      ...content,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        const options = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        fetch(process.env.NEXT_PUBLIC_URL + `topics/${id}`, options)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const lastid = result.id;
            router.refresh();
            router.push(`/read/${lastid}`);
          });
      }}
    >
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={content.title}
          onChange={onChange}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={content.body}
          onChange={onChange}
        />
      </p>
      <input type="submit" value="update" />
    </form>
  );
}
