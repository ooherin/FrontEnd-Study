export interface OneTodoItem {
  content: string;
  state: boolean;
  onClick?: void;
  id: number;
  createdTime: string;
  title: string;
  createdAt: Date;
}
