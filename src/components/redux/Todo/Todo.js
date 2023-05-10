import React, { useState } from 'react';

const Todo = () => {
    const [items, setItems] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = e.target.item.value;
        setItems([...items, {text: newItem, isChecked: false}]);
        e.target.reset();
    };

    const handleDelete = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const handleCheck = (index) => {
        const newItems = [...items];
        newItems[index].isChecked = !newItems[index].isChecked;
        setItems(newItems);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="item" placeholder="Enter item" />
                <button type="submit">Add Item</button>
            </form>
            <hr />
            {items.map((item, index) => (
                <div key={index}>
                    <input type="checkbox" checked={item.isChecked} onChange={() => handleCheck(index)} />
                    <span style={{textDecoration: item.isChecked ? 'line-through' : 'none'}}>
                        Item - {item.text}
                    </span>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Todo;
