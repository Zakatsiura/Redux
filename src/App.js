import './App.css';
// import Counter from "./components/Counter/Counter";
import TodoListRTK from "./components/rtk/TodoListRTK";
import TodoItemRTK from "./components/rtk/TodoItemRTK";
import ResetApp from "./components/rtk/ResetApp";

function App() {
    return (
        <div className="App">
            {/*<Counter/>*/}
            <TodoItemRTK/>
            <TodoListRTK/>
            <ResetApp/>
        </div>
    );
}

export default App;
