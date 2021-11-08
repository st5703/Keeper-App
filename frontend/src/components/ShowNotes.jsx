import React from "react";
import Note from "./Note";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";

function ShowNotes({ notes, setNotes }) {
    
    function delNote(id){
        console.log(id)
        axios.post("http://localhost:3001/api/delete", { id })
        .then(res => setNotes(res.data))
    }

    return (<div>
        {
            notes.map((note) => (
                <div className="note" key={note._id}>
                    <h1>{note.title}</h1>
                    <p>{note.content}</p>
                    <button onClick={()=>delNote(note._id)}> <DeleteIcon /> </button>
                </div>)
            )
        }
    </div>)

};

export default ShowNotes;