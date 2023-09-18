import React, { useState } from "react";

function CreateArea(props) {

    // Setting the limits
    const titleCharacterLimit = 20;
    const contentCharacterLimit = 75;

    const [userTitle, setUserTitle] = useState("");
    const [userContent, setUserContent] = useState("");

    function titleChangeFunc(e) {
        if (titleCharacterLimit - e.target.value.length >= 0) {
            setUserTitle(e.target.value);
        }
    }

    function contentChangeFunc(e) {
        if (contentCharacterLimit - e.target.value.length >= 0) {
            setUserContent(e.target.value);
        }
    }

    function addRequest(e) {

        // Whenever you click on a button inside a form, the default behavior is to refresh the page.
        e.preventDefault();

        props.onAdd(userTitle, userContent, setUserTitle, setUserContent);
    }

    return (
        <div style={{width: "94%", marginLeft: "3%"}}>
            <form>
                <input value={userTitle} placeholder="Title" spellCheck="false" onChange={titleChangeFunc} />
                <small>{userTitle.length + " / " + titleCharacterLimit}</small>

                <textarea value={userContent} placeholder="Take a note..." spellCheck="false" rows="3" onChange={contentChangeFunc}></textarea>
                <small>{userContent.length + " / " + contentCharacterLimit}</small>

                <button onClick={addRequest}>Add</button>
            </form>
        </div>
    )
};

export default CreateArea;
