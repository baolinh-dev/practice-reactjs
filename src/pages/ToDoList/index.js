import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  function handleAdd() {
    setTodos([...todos, todo]);
    setTodo("");
  }

  function handleDelete(index) {
    console.log("index delete", index);
    let deletedTodos = [...todos];
    deletedTodos.splice(index, 1);
    setTodos(deletedTodos);
  }

  function handleEdit(index) {
    console.log("index edit", index);  
    setEditIndex(index) 
    setTodo(todos[index])
  } 

  function handleSave() {
    let editTodos = [...todos] 
    editTodos[editIndex] = todo 
    setTodos(editTodos) 
    setTodo("")
    setEditIndex(-1) 
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
          <button onClick={() => handleAdd()}>Thêm</button>
        ) : (
          <button onClick={() => handleSave()}>Save</button>
        )}
      </div>

      <div>
        <p>Giá trị vừa nhập: {todo}</p> 
        <p>index edit: {editIndex}</p>
        {todos ? (
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <p>
                  Công việc: {todo} - Index: {index}
                </p>
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
