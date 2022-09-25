import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import AddIcon from "@mui/icons-material/Add";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";

function App() {
  let [todo, setTodo] = useState("");
  let [listOfTodos, setList] = useState([]);
  let [elem, clearElem] = useState();

  let add = () => {
    listOfTodos.push(todo);
    setList([...listOfTodos]);
    elem.target.value = "";
    console.log(listOfTodos);
  };

  let edit = (index, value) => {
    console.log(index);
    let editedTask = prompt("", value);
    listOfTodos[index] = editedTask;
    setList([...listOfTodos]);
    console.log(listOfTodos);
  };

  let remove = (index) => {
    console.log(index);
    listOfTodos.splice(index, 1);
    setList([...listOfTodos]);
    console.log(listOfTodos);
  };

  let removeAll = () => {
    listOfTodos = [];
    setList(([...listOfTodos] = []));
    console.log("run");
    console.log(listOfTodos);
  };

  return (
    <div>
      <h1>TODOLIST</h1>
      <div className="wrapper">
        <input
          onChange={(e) => {
            setTodo(e.target.value);
            clearElem(e);
          }}
          size={50}
          type="text"
        />
        <div className="addBtn">
          <Button icon={<AddIcon />} eventFunction={add} text="Add Task" />
        </div>
      </div>

      <div>
        <hr style={{ width: 800, marginTop: 40 }} />
      </div>

      <div className="wrapper">
        <div className="wrapper3">
          <h2 style={{ marginRight: 10 }}>Your Tasks:</h2>
          <Button
            icon={<DeleteSweepOutlinedIcon />}
            text="Delete All"
            eventFunction={removeAll}
          />
        </div>
      </div>

      <div className="container">
        <div className="parentData">
          {listOfTodos.map((values, indexes) => {
            return (
              <div className="data" key={indexes}>
                {values}
                <div className="btnParent">
                  <Button
                    eventFunction={() => {
                      edit(indexes, values);
                    }}
                    icon={<ModeEditOutlineIcon />}
                  />
                  <Button
                    eventFunction={() => {
                      remove(indexes);
                    }}
                    icon={<DeleteOutlineIcon />}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="wrapper2">
        <h2 style={{ color: "white" }}>
          Total tasks: <span>{listOfTodos.length}</span>
        </h2>
      </div>
    </div>
  );
}

export default App;
