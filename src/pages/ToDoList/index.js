import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [completed, setCompleted] = useState([]);

  function handleAdd() {
    setTodos([...todos, todo]);
    setCompleted([...completed, false]);
    setTodo("");
  }

  function handleDelete(index) {
    const updatedTodos = [...todos];
    const updatedCompleted = [...completed];
    updatedTodos.splice(index, 1);
    updatedCompleted.splice(index, 1);
    setTodos(updatedTodos);
    setCompleted(updatedCompleted);
  }

  function handleEdit(index) {
    setEditIndex(index);
    setTodo(todos[index]);
  }

  function handleSave() {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = todo;
    setTodos(updatedTodos);
    setTodo("");
    setEditIndex(-1);
  }

  function handleDone(index) {
    const updatedCompleted = [...completed];
    updatedCompleted[index] = !updatedCompleted[index];
    setCompleted(updatedCompleted);
  }

  return (
    <>
      <div>
        <input
          placeholder="Nhập công việc tại đây"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        {editIndex === -1 ? (
          <button onClick={handleAdd}>Thêm</button>
        ) : (
          <button onClick={handleSave}>Save</button>
        )}
      </div>

      <div>
        <p>Giá trị vừa nhập: {todo}</p>
        <p>index edit: {editIndex}</p>
        {todos.length ? (
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  name="selectedTodo"
                  checked={completed[index]}
                  onChange={() => handleDone(index)}
                />
                <label
                  style={
                    completed[index] ? { textDecoration: "line-through" } : {}
                  }
                >
                  Công việc: {todo} - 
                </label>
                <label>
                   Index:{index}
                </label>
                <button onClick={() => handleDelete(index)}>Xóa</button>
                <button onClick={() => handleEdit(index)}>Sửa</button>
              </li>
            ))}
          </ul>
        ) : (
          <p> chưa có </p>
        )}
      </div>
    </>
  );
}

export default TodoList;
