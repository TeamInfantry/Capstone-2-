import React, { useState } from "react";

function EndPage() {
    const [ setValue] = useState();

    const Refresh = () => {
        setValue({});
    }

    return(
    <div className="footer">
        <h2>No More Tour Remaining</h2>
        <button onClick={Refresh} className='btn'>Refresh</button>
    </div>
    )

}

export default EndPage;