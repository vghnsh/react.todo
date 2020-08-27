import React from 'react'
import {  ListItemText } from '@material-ui/core';
import db from './firebase';
import {Button} from '@material-ui/core';
import './App.css';

function ToDo(props) {
    return (
        <div className="todo">
            <div className="text">
            <ListItemText primary={props.todo.todo} secondary={props.todo.un} >
            
            </ListItemText>
            </div>
            <div className="btn">
            <Button onClick={event =>{ db.collection('todo').doc(props.todo.id).delete()}} variant="contained" color="secondary">Delete Me</Button>
        
            </div>
        </div>

       
    )
}

export default ToDo;
