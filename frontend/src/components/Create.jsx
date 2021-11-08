import React from "react";
import { isPropertySignature } from "typescript";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import axios from "axios";


function CreateArea({ setNotes }) {

  const [note, setNoteobj] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(evt) {
    const { name, value } = evt.target;

    setNoteobj(() => {

      return { ...note, [name]: value };
    });
  }


  function addNote() {
    axios.post('http://localhost:3001/api/addNew', note)
    .then(res => setNotes(res.data))
    setNoteobj({ title: "", content: "" })

}

  // function submitNote(evt) {
  //   // console.log(note);
    
  //   axios.post('http://localhost:3001/api/addNew', note)
  //     .then()
  //   setNoteobj({ title: "", content: "" })
  //   props.onAdd(note);

  //   // evt.preventDefault();
  // }

  return (
    <div>
      <form className="create-note">
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..." rows="3" />
        <Fab onClick={addNote}><AddIcon /></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
