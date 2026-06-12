import { useState } from "react";

const Form = () => {
    // state for score
    const [ score, setScore] = useState("10");
    // state for the comment
    const [ comment, setComment ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Number(score) <=5 && comment.length <= 10) {
            alert("Provide a comment");
            return;
        }

        // reset input values
        setScore("10");
        setComment("");
        return <h1>Submitted!</h1>
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <p>{ score }</p>
                <input 
                    type="range" 
                    name="range" 
                    id="range" 
                    value={ score } 
                    onChange={ e => { setScore(e.target.value)}} 
                    min="1"
                    max="10"
                />

                <textarea 
                    name="comment" 
                    id="comment" 
                    value={ comment } 
                    onChange={ e => { setComment(e.target.value) }}
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form