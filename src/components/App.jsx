import React, { useState } from "react";
import Header from "./Header.jsx";
import CreateArea from "./CreateArea.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";

function App() {

    const [notes, setNotes] = useState([]);

    function AddNote(userTitle, userContent, setUserTitle, setUserContent) {

        if (userTitle !== "" && userContent !== "") {

            const newNoteObj =
            {
                title: userTitle,
                content: userContent
            }

            // prevValues: notes dizisinin önceki değerine erişmek için
            setNotes((prevValues) => {
                return [...prevValues, newNoteObj];
            })

            setUserTitle("");
            setUserContent("");

            // console.log(newNoteObj);
        }
    }

    function deleteNote(uniqueID) {

        // console.log(uniqueID);

        // prevValues: notes dizisinin önceki değerine erişmek için
        setNotes((prevValues) => {
            return prevValues.filter((eachNote, index) => {
                return index !== uniqueID;
            })
        })
    }

    return (
        <div>
            <Header />

            <CreateArea onAdd={AddNote} />

            <div className="flex-container">
                {notes.map((eachNote, index) => {
                    // map: dizideki her bir eleman için "Note" componentini döndürür!
                    return (
                        <Note
                            // Each child in a list should have a unique "key" prop.
                            key={index}
                            uniqueID={index}
                            noteTitle={eachNote.title}
                            noteContent={eachNote.content}
                            onDelete={deleteNote}
                        />
                    );
                })}
            </div>

            <Footer />
        </div>
    )
};

export default App;
