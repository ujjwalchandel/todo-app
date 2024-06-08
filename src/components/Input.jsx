import React, { useState } from 'react';

export default function Input (props) {
    let [todo, setTodo] = useState('');
    let [error, setError] = useState(false)

    const submit = (event) => {
        event.preventDefault();

        if(todo.length > 0) {
            props.addTodo(todo);
            setTodo('');
        } else {
           setError(true);
        }

    }


    return (
        <form className="row" onSubmit={submit}>
             <div className="col-10">
                 <input 
                 type="text" 
                 className="form-control"
                 value={todo}
                 onChange={(event) => {
                    setTodo(event.target.value)
                    setError(false)
                 } }/>

                 {
                    error && <p className='text-danger'>Please enter the todo first!</p>
                 }

                 
             </div>
            <div className="col-2">
                <button type="submit" className="btn btn-primary mb-3">ADD</button>
            </div>
        </form>
    );
}
