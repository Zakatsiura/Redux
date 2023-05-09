import {useDispatch, useSelector} from "react-redux";
import {removeTodo, toggleTodo, store} from "./store";

const TodoList = () => {
    const todos = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.title}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodo(todo.id))}
                        />{" "}
                        {todo.title}{" "}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList