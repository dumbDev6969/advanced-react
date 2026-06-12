import { useState } from 'react'

const ControlledComponent = () => {
    const [val, setVal] = useState("");

    // handle the submission
    const handleSubmit = (e) => {
        // prevent from submission
        e.preventDefault();
        console.log('form submitted');

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={val} onChange={e => setVal(e.target.value)} />
            <button disabled={!val} type='submit'>Submit</button>
        </form>
    )
}

export default ControlledComponent