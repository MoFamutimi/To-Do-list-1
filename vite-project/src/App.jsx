import { useState } from 'react'
import  './App.css'
import Todo from './Todo.jsx'

const App = () =>{
    const [items, setItem] = useState([]);
    const [add, setAdd] = useState("");

    // const addTodo = () => {
    //     setItem((prev)=> [...prev, items])
    //     setItem("")
    // }

    const addTodo = () => {
        if(add.trim() !== "") {
            setItem([...items, add]);
            setAdd("")
        }
    }

    return(
        <>
            <main>
                <section>
                    <div className="head">
                    <h1>My To-Do List Application</h1>
                    </div>
                    <div className="main">
                    <div className="container">
                        <input type="text" placeholder='Add text' className='add' value={add} onChange={(e) => setAdd(e.target.value)}/>
                        <button onClick={addTodo}>ADD</button>
                    </div>
                    </div>
                    <div className="Card">
                        <Todo item = {items}/>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App