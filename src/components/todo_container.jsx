import React from "react";
import TodoListItem from "./todo_list_li";

export default function TodoContainer({todoList, setTodoList}) {
    const styles = {
        position: "relative",
        borderRadius: "10px",
        minHeight: "50%",
        minWidth: "50%",
        marginTop: "1vmax",
        textAlign: "left"
    }

    function renderTodos() {
        if (!todoList) return null;
        let result = [];
        todoList.forEach(item => {
          result.push(
            <TodoListItem text={item.text} id={item.id} todoList={todoList} setTodoList={setTodoList} isCompleted={item.isCompleted}/>
          )
        });
        return result;
    }

    return (
        <div className="todo-container" style={styles}>
            <ul className="todo-list">
                {renderTodos()}
            </ul>
        </div>
    );
}