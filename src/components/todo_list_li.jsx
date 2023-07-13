import React, { useState } from "react";

export default function TodoListItem({text, isCompleted, id, todoList, setTodoList}) {
    const styles = {
        width: "fit-content"
    }

    const [classNameCompletionCheck, setClassName] = useState("pending");

    function completeTodo(event) {
        if(event.target.tagName === "LI") {
            todoList.forEach(item => {
                if (item.id === id) {
                    item.isCompleted = !item.isCompleted;
                    if (item.isCompleted) setClassName("completed");
                    else setClassName("pending");
                }
            });
        }
    }

    function atualizeText(event) {
        todoList.forEach(item => {
            if (item.id === id) {
                item.text = event.target.value;
            }
        });
    }

    function removeElementFromList() {
        setTodoList(todoList.filter(value => value.id !== id));
        console.log(id);
    }

    return (
        <li className={classNameCompletionCheck} style={styles} onClick={completeTodo} key={id}>
            <input type="text" style={{background: "transparent", border: "transparent"}} defaultValue={text} onChange={atualizeText}></input>
            <button onClick={removeElementFromList} style={{height: "100%", WebkitTextFillColor: "red"}}>X</button>
        </li>
    );
}