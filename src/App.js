import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo.js';
import './App.css';
import db from './firebase.js';
import firebase from 'firebase';

function App() {
  // todos state
  const [todos, setTodos] = useState([]);

  // input state
  const [input, setInput] = useState('');

  // when the app loads, listen to the databse and fetch new todos as they get added/removed
  useEffect(() => {
    // this fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })));
    })
  }, []);

  // adding todo
  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>

      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo} >Add Todo</Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
