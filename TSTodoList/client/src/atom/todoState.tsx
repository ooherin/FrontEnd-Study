import { atom } from "recoil";
import { OneTodoItem } from "../model/Todo";

export const todoListState = atom<OneTodoItem[]>({
  key: "todoListState",
  default: [
    {
      id: 1,
      state: false,
      content: "내용1",
      title: "제목1",
      createdAt: new Date("2023-08-19 15:30:45"),
    },
    {
      id: 2,
      state: false,
      content: "내용2",
      title: "제목2",
      createdAt: new Date("2023-08-19 15:30:45"),
    },
  ],
});

// content: string;
// state: boolean;
// onClick?: void;
// id: number;
// title: string;
// createdAt: Date;
// }

//  content: string;
// state: boolean;
// onClick?: void;
// id: number;
// createdTime: string;
// title: string;
// createdAt: Date;
