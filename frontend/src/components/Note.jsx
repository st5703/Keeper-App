import React from "react";
import Notes from "../notes";
import DeleteIcon from '@material-ui/icons/Delete';



function Note(props) {

    function handleClick() {
        console.log(props);
        props.onDelete(props._id);
    }
    // console.log(props);
    return (<div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}> <DeleteIcon /> </button>
    </div>)
}

export default Note;