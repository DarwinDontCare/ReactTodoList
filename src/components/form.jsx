import React from "react";
import Button from "./button";
import Input from "./input";
import TodoContainer from "./todo_container";

export default function InputForm() {
    const stylesForm = {
        textAlign: "center"
    }

    const [todoList, setTodoList] = React.useState([]);

    const [id, setId] = React.useState(0);

    function getFormResultAndAddToList(event) { 
        event.preventDefault();
        var canContinue = false;   
        for (var i = 0; i < event.target[0].value.split(" ").length; i++) {
            if (!event.target[0].value.split(" ")[i] == "") canContinue = true;
        }
        if (event.target[0].value != "" && canContinue) {
            todoList.push({
                text: event.target[0].value,
                isCompleted: false,
                id: id
            });
            setId(id + 1);
            console.log(todoList);
            event.target[0].value = "";
        }
    }

    return (
        <>
            <form className="input-form" style={stylesForm} onSubmit={getFormResultAndAddToList}>
                <Input></Input>
                <Button text={"add"}></Button>
            </form>
            <br/>
            <TodoContainer todoList={todoList} setTodoList={setTodoList}/>
        </>
    );
}