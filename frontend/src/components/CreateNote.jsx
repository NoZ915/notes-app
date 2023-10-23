import React from "react";

function CreateNote(){
    return(
        <div className="container">
            <h1>Create Note Page</h1>
            <form>
                <div className="form-group">
                    <input name="title" autoComplete="off" className="form-control" placeholder="note title"></input>
                </div>

                <div className="form-group">
                    <textarea name="content" className="form-control" placeholder="note content"></textarea>
                </div>

                <button className="btn btn-lg btn-info">ADD NOTE</button>
            </form>
        </div>
    )
}

export default CreateNote;