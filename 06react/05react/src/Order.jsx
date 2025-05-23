import { useState } from "react";



export function Counter(){
    const [count,setCount] = useState(0)




    return(
        <div>
            <h2>
                Chai Counter
            </h2>
            <p>You have served {} cups od Chai</p>
            <button onClick={()}>Serve Chai</button>
        </div>
    )


}