import './App.css';
// import Counter from "./components/Counter/Counter";
import TodoList from "./components/redux/TodoRedux/TodoList";
import TodoItem from "./components/redux/TodoRedux/TodoItem";

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
