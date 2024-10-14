import TodoItem from "./TodoItem";
import { TodoT } from "../App";

type Props = {
  list: TodoT[];
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  openModal: (id?: number) => void;
};

export default function TodoList({
  list,
  completeTodo,
  deleteTodo,
  openModal,
}: Props) {
  return (
    <section className="todo__list">
      {list.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          openModal={openModal}
        />
      ))}
    </section>
  );
}
