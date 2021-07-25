interface IProps {
  id: string;
  name: string | undefined;
  handleFinish: (id: string) => void;
}

const TodoList = ({ name, id, handleFinish }: IProps) => {
  return (
    <section>
      <span style={{ fontSize: 30, marginRight: 5 }}>{name}</span>
      <button onClick={() => handleFinish(id)}>Done?</button>
    </section>
  );
};
export default TodoList;
