import './App.css';
// import Counter from "./components/Counter/Counter";
import TodoList from "./components/TodoRedux/TodoList";
import TodoItem from "./components/TodoRedux/TodoItem";

function App() {
    return (
        <div className="App">
            {/*<Counter/>*/}
            <TodoItem/>
            <TodoList/>
        </div>
    );
}

export default App;
