import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Empty from "./components/Empty";
import Modal from "./components/Modal";
import plus from "./assets/plus.svg";
export type TodoT = {
  id: number;
  title: string;
  complete: boolean;
};

function App() {
  const [theme, setTheme] = useState<"white" | "dark">("white");
  const [list, setList] = useState<TodoT[]>(getList());
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  function changeTheme() {
    setTheme((prev) => (prev === "white" ? "dark" : "white"));
  }

  function openModal(id?: number) {
    setOpen(true);
    if (id) {
      setEditId(id);
    } else {
      setEditId(null);
    }
  }

  function closeModal() {
    setOpen(false);
    setValue("");
  }

  function changeValue(event: any) {
    setValue(event.target.value);
  }

  function changeSearch(event: any) {
    setSearch(event.target.value);
  }

  function changeFilter(event: any) {
    setFilter(event.target.value);
  }

  function addTodo() {
    setList((prev) => [
      ...prev,
      { id: Date.now(), title: value, complete: false },
    ]);
    closeModal();
  }

  function completeTodo(id: number) {
    const newList = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(newList);
  }

  function editTodo(id: number) {
    const newList = list.map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setList(newList);
    closeModal();
  }

  function deleteTodo(id: number) {
    const newList = list.filter((item) => item.id != id);
    setList(newList);
  }

  function getFilterList() {
    const searchList = list.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    if (filter === "Complete") {
      return searchList.filter((item) => item.complete);
    } else if (filter === "Incomplete") {
      return searchList.filter((item) => !item.complete);
    } else {
      return searchList;
    }
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  function getList() {
    if (localStorage.getItem("list")) {
      return JSON.parse(localStorage.getItem("list") as string);
    } else {
      return [];
    }
  }

  const filterList = getFilterList();

  return (
    <div className={theme === "white" ? "body" : "body dark"}>
      <div className="container">
        <Header
          changeTheme={changeTheme}
          theme={theme}
          search={search}
          changeSearch={changeSearch}
          filter={filter}
          changeFilter={changeFilter}
        />
        <main>
          {filterList.length === 0 ? (
            <Empty theme={theme} />
          ) : (
            <TodoList
              openModal={openModal}
              list={filterList}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          )}
        </main>
        {open && (
          <Modal
            closeModal={closeModal}
            value={value}
            changeValue={changeValue}
            addTodo={addTodo}
            editId={editId}
            editTodo={editTodo}
          />
        )}
        <button className="openbtn" onClick={() => openModal()}>
          <img src={plus} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
