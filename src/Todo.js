import React, { useState } from 'react';
import {
         List,
         ListItem,
         ListItemText,
         ListItemAvatar,
         Modal,
         makeStyles
       } from '@material-ui/core';
import db from './firebase.js';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const useStyles = makeStyles((theme) => ({
   paper: {
     position: 'absolute',
     width: 400,
     backgroundColor: theme.palette.background.paper,
     border: '2px solid #000',
     boxShadow: theme.shadows[5],
     padding: theme.spacing(2, 4, 3),
   },
 }));

function Todo(props) {
   const classes = useStyles();
   const [open, setOpen] = useState(false);
   const [input, setInput] = useState(props.todo.todo);

   const handleOpen = () => {
      setOpen(true);
   }

   const updateTodo = () => {
      db.collection('todos').doc(props.todo.id).set({
         todo: input
      }, {merge: true})

      setOpen(false);
   }

   return (
      <>
         <Modal
            open={open}
            onClose={event => setOpen(false)}
         >
            <div className={classes.paper}>
               <h2>I am a modal</h2>
               <input value={input} onChange={event => setInput(event.target.value)}></input>
               <button onClick={updateTodo}>Update Todo</button>
            </div>
         </Modal>
         <List>
            <ListItem>
            <ListItemAvatar>
               <ListItemText primary={props.todo.todo} secondary="Todo"></ListItemText>
            </ListItemAvatar>
            </ListItem>
            <button onClick={handleOpen}>Edit</button>
            <DeleteRoundedIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
         </List>
      </>
   )
}

export default Todo
