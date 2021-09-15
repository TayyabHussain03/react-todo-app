import React, { useState } from 'react'
import TodoList from './TodoList'

const App = () => {
    const [inputList, setinputList] = useState("");
    const [Items, setItems] = useState([])
    const itemEvent = (e) => {
        setinputList(e.target.value)
    }

    const addItem = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setinputList('')
    };
    const deleteItems = (id) => {
        console.log("deleted");
        setItems((oldItems) => {
            return (
                oldItems.filter((arrElem, index) => {
                    return index !== id;
                })
            )
        })
    };
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo App</h1>
                    <br />
                    <input type="text" placeholder="Add Items Here" value={inputList} onChange={itemEvent} />
                    <button onClick={addItem}> add </button>
                    <ol>
                        {Items.map((itemval, index) => {
                            return <TodoList key={index} id={index} text={itemval} onSelect={deleteItems} />;
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default App