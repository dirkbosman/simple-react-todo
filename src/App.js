import React, {useState} from "react";
import ReactDom from "react-dom";

const initialState = [1,2,3];

// create App component
const App = () => {
    
    // "todos"-house with "setTodos"-function as door to edit/add/delete into house.
    const [todos, setTodos]  = useState(initialState);

    const addItem = () => {
        setTodos([...todos, todos.length+1]);
    };
    
    // we need to use "map" and not "foreach" or "for" to change the [1,2,3]- object.
    const todosMarkup = todos.map((item) => <li key={item}>{item}</li>);

    return (
        <div>
            <button onClick={addItem}>Add</button>
            {todosMarkup}
        </div>
    );
}


ReactDom.render(<App />, document.getElementById("app"));