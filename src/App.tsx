interface IProps {
  name?: string;
}

const App = ({ name }: IProps) => {
  return (
    <section>
      <h1>{name}</h1>
    </section>
  );
};
export default App;
