import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateNotes from "./components/CreateNotes";
import Footer from "./components/Footer";


function App() {
    const [notes, createNotes] = useState([]);

    function addNote(newNote) {
        createNotes(oldNotes => {
            return [...oldNotes, newNote];
        });
    }

    function removeNote(id) {
        createNotes(oldNotes => {
            return oldNotes.filter((noteContent, serial) => {
                return serial !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateNotes add={addNote} />
            {notes.map((noteContent, serial) => {
                return (
                    <Note
                        key={serial}
                        id={serial}
                        heading={noteContent.heading}
                        text={noteContent.text}
                        onDelete={removeNote}
                    />
                    
                );
            })}
            <Footer/>
        </div>
    );
}

export default App;