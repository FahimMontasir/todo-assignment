import { useRef, useState } from "react";
import TodoList from "./components/TodoList";
interface TodosProp {
  name: string | undefined;
  id: string;
}

const App: React.FC = () => {
  const targetRef = useRef<HTMLInputElement | null>(null);
  const [todos, setTodos] = useState<TodosProp[]>([]);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newTodos = [
      ...todos,
      { name: targetRef.current?.value, id: Date.now().toLocaleString() },
    ];
    setTodos(newTodos);
  };

  const handleFinish = (id: string): void => {
    const notDeletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(notDeletedTodos);
  };
  return (
    <section style={{ textAlign: "center" }}>
      <h1>Todo:</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          ref={targetRef}
          name="todo"
          placeholder="enter your target"
        />
        <button type="submit">add</button>
      </form>
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          id={todo.id}
          name={todo.name}
          handleFinish={handleFinish}
        />
      ))}
    </section>
  );
};
export default App;
