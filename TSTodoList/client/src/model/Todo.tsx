export interface OneTodoItem {
  content: string;
  state: boolean;
  onClick?: void;
  id: number;
  title: string;
  createdAt: Date;
}
