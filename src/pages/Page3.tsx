import React, { FC, memo } from "react";
interface Props {
  todos: string[];
  addTodo: () => void;
}
const Page3: FC<Props> = ({ todos, addTodo }) => {
  console.log("Page 3");
  console.log("child render Todo");

  return (
    <div>
      <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </>
    </div>
  );
};

export default memo(Page3);
