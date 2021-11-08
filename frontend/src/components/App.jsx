import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import ShowNotes from "./ShowNotes";

import CreateArea from "./Create";
import {useEffect} from "react";
import axios from "axios";

// function createNote(notes){
//     return <Note
//         title={notes.title}
//         content={notes.content}
//      />
// }

function App() {

    const [notes, setNotes] = React.useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/api/getAll')
        .then((res)=> setNotes(res.data) )
    }, [])





    return <div>
        <Header />
        <CreateArea notes={notes} setNotes={setNotes}/>
        <ShowNotes notes={notes} setNotes={setNotes} />
        {/* {notes.map((note) => {
            return <Note 
            key = {note._id}
            title={note.title} 
            content={note.content} 
            onDelete={delNote} />
        })}
   */}
        <Footer />
    </div>;

}

export default App;